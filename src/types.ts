export type ProductMedia = {
  type: 'image' | 'video'
  src: string
  alt: string
  poster?: string
  thumbSrc?: string
}

export type Specification = {
  label: string
  value: string
}

export type OfferIcon = 'pix' | 'card' | 'installment' | 'bolt' | 'monitor' | 'package'

export type OfferBadge = {
  icon: OfferIcon
  label: string
}

export type ProductConfiguration = {
  id: string
  buttonLabel: string
  title: string
  price: string
  specifications: Specification[]
  valuePoints?: OfferBadge[]
}

export type ProductLocation = {
  city: string
  state: string
  zip: string
}

export type SellerInfo = {
  name: string
  slogan: string
  logoSrc: string
  responseTime: string
  rating: {
    value: number
    total: number
  }
  highlights: SellerHighlight[]
}

export type SellerHighlight = {
  icon: 'shield' | 'truck' | 'tag'
  label: string
}

export type ProductInfo = {
  configurations: ProductConfiguration[]
  media: ProductMedia[]
  seller: SellerInfo
  location: ProductLocation
  paymentOptions: OfferBadge[]
  valuePoints: OfferBadge[]
}
