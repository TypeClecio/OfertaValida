import './style.css'
import { inject } from '@vercel/analytics'
import { setupGallery } from './components/gallery'
import { renderStorePage } from './components/store-page'
import { productInfo, sellerPhone } from './data/product'

inject({
  mode: import.meta.env.DEV ? 'development' : 'production',
})

const pageLink = window.location.href
const whatsappMessage = encodeURIComponent(`${pageLink}\nEu vi essa oferta. Pode me passar mais detalhes?`)
const whatsappUrl = `https://wa.me/${sellerPhone}?text=${whatsappMessage}`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderStorePage(productInfo, whatsappUrl)
setupGallery(productInfo.images)
