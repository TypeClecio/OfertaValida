import './style.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { renderSpecifications } from './components/details-card'
import { setupGallery } from './components/gallery'
import { renderHighlights } from './components/offer-card'
import { renderStorePage } from './components/store-page'
import { productInfo, sellerPhone } from './data/product'
import type { ProductConfiguration, ProductInfo } from './types'

inject({
  mode: import.meta.env.DEV ? 'development' : 'production',
})

injectSpeedInsights()

const buildWhatsAppUrl = (phone: string, configuration: ProductConfiguration) => {
  const pageLink = window.location.href
  const whatsappMessage = encodeURIComponent(
    `${pageLink}\nOla! Tenho interesse nessa oferta.\nConfiguracao escolhida: ${configuration.buttonLabel}\nPreco anunciado: ${configuration.price}`,
  )

  return `https://wa.me/${phone}?text=${whatsappMessage}`
}

const updateSelectedConfiguration = (configuration: ProductConfiguration) => {
  const title = document.querySelector<HTMLElement>('[data-product-title]')
  const subtitle = document.querySelector<HTMLElement>('[data-product-subtitle]')
  const selectedConfig = document.querySelector<HTMLElement>('[data-selected-config]')
  const selectedPrice = document.querySelector<HTMLElement>('[data-selected-price]')
  const highlights = document.querySelector<HTMLUListElement>('[data-highlights]')
  const specifications = document.querySelector<HTMLDListElement>('[data-specifications]')
  const whatsappLink = document.querySelector<HTMLAnchorElement>('[data-whatsapp-link]')
  const whatsappText = document.querySelector<HTMLElement>('[data-whatsapp-text]')

  if (!title || !subtitle || !selectedConfig || !selectedPrice || !highlights || !specifications || !whatsappLink || !whatsappText) {
    return
  }

  title.textContent = configuration.title
  subtitle.textContent = configuration.subtitle
  selectedConfig.textContent = configuration.buttonLabel
  selectedPrice.textContent = configuration.price
  highlights.innerHTML = renderHighlights(configuration.highlights)
  specifications.innerHTML = renderSpecifications(configuration.specifications)
  whatsappLink.href = buildWhatsAppUrl(sellerPhone, configuration)
  whatsappText.textContent = `Falar com o vendedor no WhatsApp`
}

const setupConfigurationSelector = (product: ProductInfo) => {
  const configurations = new Map(product.configurations.map((configuration) => [configuration.id, configuration]))
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-configuration-id]')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const configurationId = button.dataset.configurationId

      if (!configurationId) {
        return
      }

      const configuration = configurations.get(configurationId)

      if (!configuration) {
        return
      }

      buttons.forEach((item) => {
        const isActive = item === button
        item.classList.toggle('is-active', isActive)
        item.setAttribute('aria-pressed', String(isActive))
      })

      updateSelectedConfiguration(configuration)
    })
  })

  updateSelectedConfiguration(product.configurations[0])
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderStorePage(productInfo)
setupGallery(productInfo.media)
setupConfigurationSelector(productInfo)
