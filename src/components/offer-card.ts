import type { OfferBadge, OfferIcon, ProductConfiguration, ProductInfo } from '../types'

const whatsappIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.2 6.4 2.2 11.83c0 1.74.46 3.45 1.33 4.96L2 22l5.35-1.5a9.8 9.8 0 0 0 4.68 1.2h.01c5.42 0 9.82-4.4 9.82-9.83 0-2.62-1.02-5.08-2.81-6.96Zm-7.01 15.12h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.17.9.85-3.09-.2-.32a8.16 8.16 0 0 1-1.26-4.36c0-4.51 3.67-8.18 8.19-8.18a8.1 8.1 0 0 1 5.8 2.4 8.11 8.11 0 0 1 2.4 5.78c0 4.51-3.67 8.19-8.12 8.19Zm4.49-6.14c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.63.8-.77.96-.14.17-.28.19-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 1.99s.86 2.31.98 2.47c.12.17 1.69 2.59 4.1 3.63.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"
    />
  </svg>
`

const offerIcons: Record<OfferIcon, string> = {
  pix: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 16 16"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>
  `,
  card: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 15h6" />
    </svg>
  `,
  installment: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 14h4" />
      <path d="M7 17h8" />
    </svg>
  `,
  bolt: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  `,
  monitor: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  `,
  package: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5" />
      <path d="M12 12v10" />
    </svg>
  `,
}

export const renderOfferBadges = (items: OfferBadge[]) =>
  items
    .map(
      (item) => `
        <span class="offer-badge">
          <span class="offer-badge-icon">${offerIcons[item.icon]}</span>
          <span class="offer-badge-label">${item.label}</span>
        </span>
      `,
    )
    .join('')

const cardBrandIcons = [
  { label: 'Visa', src: '/icons/brands/visa.svg' },
  { label: 'Mastercard', src: '/icons/brands/mastercard.svg' },
  { label: 'Elo', src: '/icons/brands/elo.svg' },
  { label: 'Hipercard', src: '/icons/brands/hipercard.svg' },
  { label: 'American Express', src: '/icons/brands/amex.svg' },
]

export const renderOfferCard = (product: ProductInfo, selectedConfiguration: ProductConfiguration) => `
  <section class="offer-card">
    <p class="tag">Oferta limitada</p>
    <h1 data-product-title>${selectedConfiguration.title}</h1>
    <div class="impact-location" data-location-card role="button" tabindex="0">
      <p class="impact-location-title">Localização do setup</p>
      <p class="impact-location-value" data-location-text>
        ${product.location.city} - ${product.location.state}, ${product.location.zip}
      </p>
    </div>

    <div class="price-block">
      <p class="price-title">Escolha a configuração:</p>
      <div class="config-options" role="group" aria-label="Escolha a configuracao do setup">
        ${product.configurations
    .map(
      (configuration) => `
            <button
              type="button"
              class="config-button ${configuration.id === selectedConfiguration.id ? 'is-active' : ''}"
              data-configuration-id="${configuration.id}"
              aria-pressed="${configuration.id === selectedConfiguration.id}"
            >
              ${configuration.buttonLabel}
            </button>
          `,
    )
    .join('')}
      </div>

      <div class="selected-offer">
        <p class="selected-offer-title">Preço da configuração escolhida</p>
        <strong class="selected-config" data-selected-config>${selectedConfiguration.buttonLabel}</strong>
        <p class="price" data-selected-price>${selectedConfiguration.price}</p>
      </div>
    </div>

    
    <div class="offer-extras">
      <div class="offer-extra">
        <p class="offer-extra-title">Meios de pagamento</p>
        <div class="offer-badges">
          ${renderOfferBadges(product.paymentOptions)}
        </div>
        <p class="offer-extra-subtitle">Cartões de crédito</p>
        <div class="payment-brands" aria-label="Bandeiras de cartao">
          ${cardBrandIcons
    .map(
      (brand) => `
            <span class="payment-brand-icon">
              <img src="${brand.src}" alt="${brand.label}" loading="lazy" decoding="async" />
            </span>
          `,
    )
    .join('')}
        </div>
      </div>
      <div class="offer-extra is-emphasis">
        <p class="offer-extra-title">Diferenciais do setup</p>
        <div class="offer-badges" data-value-points>
          ${renderOfferBadges(selectedConfiguration.valuePoints ?? product.valuePoints)}
        </div>
      </div>
    </div>

    <div class="actions">
      <a class="buy-now" href="#" target="_blank" rel="noreferrer" data-whatsapp-link>
        ${whatsappIcon}
        <span data-whatsapp-text>Quero garantir meu setup no WhatsApp</span>
      </a>
    </div>
  </section>
`
