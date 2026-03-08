import './style.css'

type ProductImage = {
  src: string;
  alt: string;
}

const sellerPhone = '558899778856'
const pageLink = window.location.href
const whatsappMessage = encodeURIComponent(`${pageLink}\nEu vi essa oferta. Pode me passar mais detalhes?`)

const productImages: ProductImage[] = [
  {
    src: '/imagens/setup-completo.jpeg',
    alt: 'Setup completo',
  },
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="store-page">
    <section class="gallery-card">
      <h2>Imagens do produto</h2>
      <img id="mainImage" class="main-image" src="${productImages[0].src}" alt="${productImages[0].alt}" />
      <div class="thumb-grid" id="thumbGrid"></div>
    </section>

    <section class="offer-card">
      <p class="tag">Oferta limitada</p>
      <h1>PC Gamer Ryzen 7 5700X - Setup Completo</h1>
      <p class="subtitle">
        Computador de mesa de alta performance com monitor 200Hz e perifericos inclusos.
      </p>

      <div class="price-block">
        <p class="price-title">Escolha a configuracao:</p>
        <div class="price-option">
          <span>Com Ryzen 7 5700X</span>
          <p class="price">R$ 9.500,00</p>
        </div>
        <div class="price-option">
          <span>Com Ryzen 5 5500</span>
          <p class="price">R$ 8.700,00</p>
        </div>
      </div>

      <ul class="highlights">
        <li>Ryzen 7 5700X + GTX 1080TI</li>
        <li>24 GB RAM DDR4 e 1 TB de armazenamento</li>
        <li>Watercooler 360mm + 6 fans com controladora</li>
        <li>Monitor 200Hz e teclado Mancer Ghost</li>
      </ul>

      <div class="actions">
        <a class="buy-now" href="https://wa.me/${sellerPhone}?text=${whatsappMessage}" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.2 6.4 2.2 11.83c0 1.74.46 3.45 1.33 4.96L2 22l5.35-1.5a9.8 9.8 0 0 0 4.68 1.2h.01c5.42 0 9.82-4.4 9.82-9.83 0-2.62-1.02-5.08-2.81-6.96Zm-7.01 15.12h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.17.9.85-3.09-.2-.32a8.16 8.16 0 0 1-1.26-4.36c0-4.51 3.67-8.18 8.19-8.18a8.1 8.1 0 0 1 5.8 2.4 8.11 8.11 0 0 1 2.4 5.78c0 4.51-3.67 8.19-8.12 8.19Zm4.49-6.14c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.63.8-.77.96-.14.17-.28.19-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 1.99s.86 2.31.98 2.47c.12.17 1.69 2.59 4.1 3.63.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"
            />
          </svg>
          <span>Falar com vendedor no WhatsApp</span>
        </a>
      </div>
    </section>

    <section class="details-card">
      <h2>Especificacoes tecnicas</h2>
      <dl>
        <div>
          <dt>Processador</dt>
          <dd>AMD Ryzen 7 5700X</dd>
        </div>
        <div>
          <dt>Memoria</dt>
          <dd>24 GB DDR4</dd>
        </div>
        <div>
          <dt>Armazenamento</dt>
          <dd>1 TB</dd>
        </div>
        <div>
          <dt>Placa de video</dt>
          <dd>NVIDIA GeForce GTX 1080TI</dd>
        </div>
        <div>
          <dt>Placa-mae</dt>
          <dd>ASUS TUF GAMING</dd>
        </div>
        <div>
          <dt>Fonte</dt>
          <dd>850W 80 Plus</dd>
        </div>
        <div>
          <dt>Refrigeracao</dt>
          <dd>Watercooler 360mm + 6 fans com controladora</dd>
        </div>
        <div>
          <dt>Gabinete</dt>
          <dd>Branco aquario</dd>
        </div>
        <div>
          <dt>Perifericos</dt>
          <dd>Monitor 200Hz e teclado Mancer Ghost</dd>
        </div>
      </dl>
    </section>
  </main>
`

const mainImageEl = document.querySelector<HTMLImageElement>('#mainImage')
const thumbGridEl = document.querySelector<HTMLDivElement>('#thumbGrid')

if (mainImageEl && thumbGridEl) {
  let selectedIndex = 0

  const renderThumbs = () => {
    thumbGridEl.innerHTML = productImages
      .map(
        (image, index) =>
          `<img src="${image.src}" alt="${image.alt}" data-index="${index}" class="${index === selectedIndex ? 'is-active' : ''}" />`,
      )
      .join('')

    const active = productImages[selectedIndex]
    mainImageEl.src = active.src
    mainImageEl.alt = active.alt
  }

  thumbGridEl.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const thumb = target.closest('img')
    if (!thumb) return

    const indexAttr = thumb.getAttribute('data-index')
    if (!indexAttr) return

    const index = Number(indexAttr)
    if (Number.isNaN(index) || index < 0 || index >= productImages.length) return

    selectedIndex = index
    renderThumbs()
  })

  renderThumbs()
}
