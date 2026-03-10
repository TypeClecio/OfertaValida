import type { ProductConfiguration, ProductInfo } from '../types'

const whatsappIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.2 6.4 2.2 11.83c0 1.74.46 3.45 1.33 4.96L2 22l5.35-1.5a9.8 9.8 0 0 0 4.68 1.2h.01c5.42 0 9.82-4.4 9.82-9.83 0-2.62-1.02-5.08-2.81-6.96Zm-7.01 15.12h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.17.9.85-3.09-.2-.32a8.16 8.16 0 0 1-1.26-4.36c0-4.51 3.67-8.18 8.19-8.18a8.1 8.1 0 0 1 5.8 2.4 8.11 8.11 0 0 1 2.4 5.78c0 4.51-3.67 8.19-8.12 8.19Zm4.49-6.14c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.63.8-.77.96-.14.17-.28.19-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 1.99s.86 2.31.98 2.47c.12.17 1.69 2.59 4.1 3.63.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"
    />
  </svg>
`

export const renderHighlights = (highlights: string[]) => highlights.map((item) => `<li>${item}</li>`).join('')

export const renderOfferCard = (product: ProductInfo, selectedConfiguration: ProductConfiguration) => `
  <section class="offer-card">
    <p class="tag">Oferta limitada</p>
    <h1 data-product-title>${selectedConfiguration.title}</h1>
    <p class="subtitle" data-product-subtitle>${selectedConfiguration.subtitle}</p>

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

    <ul class="highlights" data-highlights>
      ${renderHighlights(selectedConfiguration.highlights)}
    </ul>

    <div class="actions">
      <a class="buy-now" href="#" target="_blank" rel="noreferrer" data-whatsapp-link>
        ${whatsappIcon}
        <span data-whatsapp-text>Falar sobre ${selectedConfiguration.buttonLabel} no WhatsApp</span>
      </a>
    </div>
  </section>
`
