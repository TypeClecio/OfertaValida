import type { ProductInfo } from '../types'
import { renderDetailsCard } from './details-card'
import { renderGallery } from './gallery'
import { renderOfferCard } from './offer-card'

export const renderStorePage = (product: ProductInfo) => {
  const initialConfiguration = product.configurations[0]

  return `
  <main class="store-page">
    ${renderGallery(product.media)}
    ${renderOfferCard(product, initialConfiguration)}
    ${renderDetailsCard(initialConfiguration)}
  </main>
  <footer class="site-footer">
    <p>Desenvolvido por <strong>TypeClecio</strong></p>
    <div class="footer-links">
      <a href="https://www.instagram.com/typeclecio/" target="_blank" rel="noreferrer">Instagram</a>
      <a href="https://github.com/TypeClecio" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </footer>
`
}
