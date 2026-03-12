import type { ProductInfo } from '../types'

export const sellerPhone = '558899778856'

export const productInfo: ProductInfo = {
  configurations: [
    {
      id: 'ryzen-7-5700x',
      buttonLabel: 'Ryzen 7 5700X',
      title: 'Setup Premium Ryzen 7 5700X + GTX 1080TI + 24 GB DDR4',
      price: 'R$ 9.500,00',
      specifications: [
        { label: 'Processador', value: 'AMD Ryzen 7 5700X' },
        { label: 'Memória', value: '24 GB DDR4' },
        { label: 'Armazenamento', value: '1 TB' },
        { label: 'Placa de vídeo', value: 'NVIDIA GeForce GTX 1080TI' },
        { label: 'Placa-mãe', value: 'ASUS TUF GAMING' },
        { label: 'Fonte', value: '850W 80 Plus' },
        { label: 'Refrigeração', value: 'Watercooler 360mm + 6 fans com controladora' },
        { label: 'Gabinete', value: 'Husky aquario branco' },
        { label: 'Periféricos', value: 'Monitor 200Hz e teclado Mancer Ghost' },
      ],
    },
    {
      id: 'ryzen-5-5500',
      buttonLabel: 'Ryzen 5 5500',
      title: 'Setup Premium Ryzen 5 5500 + GTX 1080TI + 24 GB DDR4',
      price: 'R$ 8.700,00',
      specifications: [
        { label: 'Processador', value: 'AMD Ryzen 5 5500' },
        { label: 'Memória', value: '24 GB DDR4' },
        { label: 'Armazenamento', value: '1 TB' },
        { label: 'Placa de vídeo', value: 'NVIDIA GeForce GTX 1080TI' },
        { label: 'Placa-mãe', value: 'ASUS TUF GAMING' },
        { label: 'Fonte', value: '850W 80 Plus' },
        { label: 'Refrigeração', value: 'Watercooler 360mm + 6 fans com controladora' },
        { label: 'Gabinete', value: 'Husky aquario branco' },
        { label: 'Periféricos', value: 'Monitor 200Hz e teclado Mancer Ghost' }
      ],
    },
  ],
  media: [
    {
      type: 'image',
      src: '/imagens/setup-completo.webp',
      alt: 'Setup completo',
    },
    {
      type: 'image',
      src: '/imagens/setup-completo-dia.webp',
      alt: 'Setup completo durante o dia',
    },
    {
      type: 'image',
      src: '/imagens/placa-de-video.webp',
      alt: 'Placa de video',
    },
    {
      type: 'video',
      src: '/videos/mostrando-setup.webm',
      alt: 'Video mostrando o setup completo',
      poster: '/imagens/setup-completo.webp',
    },
    {
      type: 'video',
      src: '/videos/mostrando-componentes.webm',
      alt: 'Video mostrando os componentes do setup',
      poster: '/imagens/placa-de-video.webp',
    },
  ],
  location: {
    city: 'Várzea Alegre',
    state: 'CE',
    zip: '63540-000',
  },
  paymentOptions: [
    { icon: 'pix', label: 'Pix' },
    { icon: 'card', label: 'Cartão' },
  ],
  valuePoints: [
    { icon: 'bolt', label: 'Pronto para jogar' },
    { icon: 'monitor', label: 'Monitor 200Hz incluso' },
    { icon: 'package', label: 'Setup completo' },
  ],
}

