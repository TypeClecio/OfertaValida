import type { ProductLocation, SellerHighlight, SellerInfo } from '../types'

const clockIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
`

const starIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 3.5 14.6 9l6.1.9-4.4 4.3 1 6.1L12 17.4 6.7 20.3l1-6.1-4.4-4.3 6.1-.9z" />
  </svg>
`

const pinIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 3a7 7 0 0 1 7 7c0 4.6-5 9.5-7 11.5-2-2-7-6.9-7-11.5a7 7 0 0 1 7-7Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
`

const highlightIcons: Record<SellerHighlight['icon'], string> = {
  shield: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3 5 6v6c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 2 2.2 3.5-3.7" />
    </svg>
  `,
  truck: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2" y="7" width="12" height="8" rx="2" />
      <path d="M14 10h4l3 3v2h-7" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="18" cy="18" r="1.5" />
    </svg>
  `,
  tag: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 8V4h4l10 10-4 4L3 8Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  `,
}

const formatRating = (rating: SellerInfo['rating']) =>
  `${rating.value.toFixed(1).replace('.', ',')} (${rating.total} avaliacoes)`

const renderHighlights = (items: SellerHighlight[]) =>
  items
    .map(
      (item) => `
        <span class="store-highlight">
          <span class="store-highlight-icon">${highlightIcons[item.icon]}</span>
          <span>${item.label}</span>
        </span>
      `,
    )
    .join('')

export const renderStoreHeader = (seller: SellerInfo, location: ProductLocation) => `
  <header class="store-header">
    <div class="store-header-main">
      <p class="store-header-eyebrow">Loja</p>
      <h2 class="store-header-title">${seller.name}</h2>
      <div class="store-header-highlights">
        <span class="store-highlight">
          <span class="store-highlight-icon">${pinIcon}</span>
          <span>${location.city} - ${location.state}</span>
        </span>
        ${renderHighlights(seller.highlights)}
      </div>
    </div>
    <div class="store-header-meta">
      <span class="store-pill">
        <span class="store-pill-icon">${clockIcon}</span>
        <span>${seller.responseTime}</span>
      </span>
      <span class="store-pill">
        <span class="store-pill-icon">${starIcon}</span>
        <span>${formatRating(seller.rating)}</span>
      </span>
    </div>
  </header>
`
