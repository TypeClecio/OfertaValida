import type { ProductMedia } from '../types'

export const GALLERY_STAGE_ID = 'mainMediaStage'
export const GALLERY_MAIN_ID = 'mainMedia'
export const GALLERY_GRID_ID = 'thumbGrid'

const VIDEO_THUMB_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

const renderMainMedia = (media: ProductMedia) => `
  ${
    media.type === 'image'
      ? `<img id="${GALLERY_MAIN_ID}" class="main-media" src="${media.src}" alt="${media.alt}" data-media-type="image" />`
      : `<video id="${GALLERY_MAIN_ID}" class="main-media main-video" src="${media.src}" poster="${media.poster ?? ''}" controls playsinline preload="metadata" aria-label="${media.alt}" data-media-type="video"></video>`
  }
`

const renderThumbPreview = (media: ProductMedia, index: number) => {
  if (media.type === 'image') {
    return `<img src="${media.src}" alt="${media.alt}" />`
  }

  return `
    <img
      src="${media.poster ?? VIDEO_THUMB_PLACEHOLDER}"
      alt="${media.alt}"
      data-video-thumb-index="${index}"
    />
    <span class="thumb-badge">VIDEO</span>
  `
}

const createVideoThumbnail = (src: string, fallbackSrc?: string) =>
  new Promise<string>((resolve) => {
    const video = document.createElement('video')
    let settled = false

    const finalize = (thumbnailSrc?: string) => {
      if (settled) return
      settled = true
      video.removeAttribute('src')
      video.load()
      resolve(thumbnailSrc ?? fallbackSrc ?? VIDEO_THUMB_PLACEHOLDER)
    }

    const captureFrame = () => {
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        finalize()
        return
      }

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      if (!context) {
        finalize()
        return
      }

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      finalize(canvas.toDataURL('image/jpeg', 0.82))
    }

    video.preload = 'metadata'
    video.muted = true
    video.playsInline = true

    video.addEventListener(
      'loadeddata',
      () => {
        const canSeekPreview = Number.isFinite(video.duration) && video.duration > 0.35

        if (!canSeekPreview) {
          captureFrame()
          return
        }

        video.addEventListener('seeked', captureFrame, { once: true })

        try {
          video.currentTime = Math.min(0.35, video.duration / 3)
        } catch {
          captureFrame()
        }
      },
      { once: true },
    )

    video.addEventListener('error', () => finalize(), { once: true })
    video.src = src
    video.load()
  })

export const renderGallery = (media: ProductMedia[]) => {
  const initialMedia = media[0]

  if (!initialMedia) {
    return `
      <section class="gallery-card">
        <h2>Imagens e videos do produto</h2>
        <p>Nenhuma midia disponivel.</p>
      </section>
    `
  }

  return `
    <section class="gallery-card">
      <h2>Imagens e videos do produto</h2>
      <div id="${GALLERY_STAGE_ID}" class="main-media-stage">
        ${renderMainMedia(initialMedia)}
      </div>
      <div class="thumb-grid" id="${GALLERY_GRID_ID}"></div>
    </section>
  `
}

export const setupGallery = (media: ProductMedia[]) => {
  const mainStageEl = document.querySelector<HTMLDivElement>(`#${GALLERY_STAGE_ID}`)
  const thumbGridEl = document.querySelector<HTMLDivElement>(`#${GALLERY_GRID_ID}`)
  if (!mainStageEl || !thumbGridEl || media.length === 0) return

  let selectedIndex = 0
  const videoThumbCache = new Map<string, string>()

  const openFullscreen = async () => {
    if (!mainStageEl.requestFullscreen) return

    try {
      await mainStageEl.requestFullscreen()
    } catch {
      // Ignore browsers that block fullscreen.
    }
  }

  const bindMainMediaEvents = () => {
    const mainMediaEl = mainStageEl.querySelector<HTMLElement>(`#${GALLERY_MAIN_ID}`)
    const selectedMedia = media[selectedIndex]

    if (!mainMediaEl || !selectedMedia) return

    if (selectedMedia.type === 'image') {
      mainMediaEl.addEventListener('click', () => {
        void openFullscreen()
      })
    }
  }

  const renderSelectedMedia = () => {
    const activeMedia = media[selectedIndex]

    if (!activeMedia) return

    mainStageEl.innerHTML = renderMainMedia(activeMedia)
    bindMainMediaEvents()
  }

  const syncVideoThumbs = async () => {
    const videoThumbEls = Array.from(thumbGridEl.querySelectorAll<HTMLImageElement>('[data-video-thumb-index]'))

    await Promise.all(
      videoThumbEls.map(async (thumbEl) => {
        const index = Number(thumbEl.dataset.videoThumbIndex)
        const item = media[index]

        if (Number.isNaN(index) || !item || item.type !== 'video') return

        let thumbnailSrc = videoThumbCache.get(item.src)

        if (!thumbnailSrc) {
          thumbnailSrc = await createVideoThumbnail(item.src, item.poster)
          videoThumbCache.set(item.src, thumbnailSrc)
        }

        const currentThumbEl = thumbGridEl.querySelector<HTMLImageElement>(`[data-video-thumb-index="${index}"]`)

        if (currentThumbEl) {
          currentThumbEl.src = thumbnailSrc
        }
      }),
    )
  }

  const renderThumbs = () => {
    thumbGridEl.innerHTML = media
      .map(
        (item, index) => `
          <button
            type="button"
            class="thumb-item ${index === selectedIndex ? 'is-active' : ''}"
            data-index="${index}"
            aria-label="Mostrar ${item.alt}"
          >
            ${renderThumbPreview(item, index)}
          </button>
        `,
      )
      .join('')

    void syncVideoThumbs()
  }

  thumbGridEl.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const thumb = target.closest<HTMLButtonElement>('[data-index]')
    if (!thumb) return

    const indexAttr = thumb.dataset.index
    if (!indexAttr) return

    const index = Number(indexAttr)
    if (Number.isNaN(index) || index < 0 || index >= media.length) return

    selectedIndex = index
    renderSelectedMedia()
    renderThumbs()
  })

  renderSelectedMedia()
  renderThumbs()
}
