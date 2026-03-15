import type { ProductInfo } from '../types'
import { renderDetailsCard } from './details-card'
import { renderGallery } from './gallery'
import { renderOfferCard } from './offer-card'
import { renderStoreHeader } from './store-header'

export const renderStorePage = (product: ProductInfo) => {
  const initialConfiguration = product.configurations[0]

  return `
  ${renderStoreHeader(product.seller, product.location)}
  <main class="store-page">
    ${renderGallery(product.media)}
    ${renderOfferCard(product, initialConfiguration)}
    ${renderDetailsCard(initialConfiguration)}
  </main>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="footer-logo">
          <img class="footer-logo-image" src="/logo.svg" alt="setupvalido" />
          <div>
            <strong class="footer-logo-name">setupvalido</strong>
            <span class="footer-logo-slogan">Seu setup pronto para jogar</span>
          </div>
        </div>
        <p class="footer-copy">© 2026 setupvalido. Todos os direitos reservados.</p>
      </div>
      <div class="footer-links">
        <a href="https://www.instagram.com/typeclecio/" target="_blank" rel="noreferrer">
          <span class="footer-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.2" />
            </svg>
          </span>
          Instagram
        </a>
        <a href="https://github.com/TypeClecio" target="_blank" rel="noreferrer">
          <span class="footer-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 2c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5-.7 1.7-1 .1-.8.4-1.3.7-1.6-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.2-.4-1.4.1-2.9 0 0 .8-.3 2.8 1.1.8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 2-1.4 2.8-1.1 2.8-1.1.5 1.5.2 2.7.1 2.9.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5 0-5.5-4.5-10-10-10Z" />
            </svg>
          </span>
          GitHub
        </a>
      </div>
    </div>
  </footer>
`
}
