export type ProductMedia = {
  type: 'image' | 'video'
  src: string
  alt: string
  poster?: string
}

export type Specification = {
  label: string
  value: string
}

export type ProductConfiguration = {
  id: string
  buttonLabel: string
  title: string
  subtitle: string
  price: string
  highlights: string[]
  specifications: Specification[]
}

export type ProductInfo = {
  configurations: ProductConfiguration[]
  media: ProductMedia[]
}
