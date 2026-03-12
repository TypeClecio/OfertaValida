import './style.css'
import { inject } from '@vercel/analytics'
import { renderSpecifications } from './components/details-card'
import { setupGallery } from './components/gallery'
import { renderStorePage } from './components/store-page'
import { productInfo, sellerPhone } from './data/product'
import type { ProductConfiguration, ProductInfo, ProductLocation } from './types'

inject({
  mode: import.meta.env.DEV ? 'development' : 'production',
})

const buildWhatsAppUrl = (phone: string, configuration: ProductConfiguration) => {
  const pageLink = window.location.href
  const whatsappMessage = encodeURIComponent(
    `${pageLink}\n\nGostaria de negociar:\nComputador com ${configuration.buttonLabel} no valor de ${configuration.price}`,
  )

  return `https://wa.me/${phone}?text=${whatsappMessage}`
}

const buildMapsUrl = (location: ProductLocation) => {
  const query = [location.city, location.state, location.zip].filter(Boolean).join(', ')
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

const setupLocationLink = (location: ProductLocation) => {
  const locationCard = document.querySelector<HTMLElement>('[data-location-card]')

  if (!locationCard) {
    return
  }

  const mapsUrl = buildMapsUrl(location)
  const openMap = () => window.open(mapsUrl, '_blank', 'noopener,noreferrer')

  locationCard.addEventListener('click', openMap)
  locationCard.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openMap()
    }
  })
}

const updateSelectedConfiguration = (configuration: ProductConfiguration) => {
  const title = document.querySelector<HTMLElement>('[data-product-title]')
  const selectedConfig = document.querySelector<HTMLElement>('[data-selected-config]')
  const selectedPrice = document.querySelector<HTMLElement>('[data-selected-price]')
  const specifications = document.querySelector<HTMLDListElement>('[data-specifications]')
  const whatsappLink = document.querySelector<HTMLAnchorElement>('[data-whatsapp-link]')
  const whatsappText = document.querySelector<HTMLElement>('[data-whatsapp-text]')

  if (!title || !selectedConfig || !selectedPrice || !specifications || !whatsappLink || !whatsappText) {
    return
  }

  title.textContent = configuration.title
  selectedConfig.textContent = configuration.buttonLabel
  selectedPrice.textContent = configuration.price
  specifications.innerHTML = renderSpecifications(configuration.specifications)
  whatsappLink.href = buildWhatsAppUrl(sellerPhone, configuration)
  whatsappText.textContent = `Negociar com o vendedor`
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
setupLocationLink(productInfo.location)
