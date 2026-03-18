import type { ProductInfo } from '../types'

export const sellerPhone = '5588994899407'

export const productInfo: ProductInfo = {
  seller: {
    name: 'SetupValido',
    slogan: 'Excelência em cada frame.',
    logoSrc: '/logo.svg',
    responseTime: 'Responde em ate 30 min',
    rating: {
      value: 4.9,
      total: 128,
    },
    highlights: [
      { icon: 'truck', label: 'Entrega local combinada' },
    ],
  },
  configurations: [
    {
      id: '2-monitores',
      buttonLabel: '2 Monitores',
      title: 'Setup Premium Ryzen 5 5500 + GTX 1080TI + 24 GB DDR4',
      price: 'R$ 7.700,00',
      specifications: [
        { label: 'Processador', value: 'AMD Ryzen 5 5500' },
        { label: 'Memória', value: '24 GB DDR4' },
        { label: 'Armazenamento', value: '1 TB' },
        { label: 'Placa de vídeo', value: 'NVIDIA GeForce GTX 1080TI' },
        { label: 'Placa-mãe', value: 'ASUS TUF GAMING' },
        { label: 'Monitores', value: '1 Monitor Mancer 27" 200hz + 1 Monitor HQ 25" 144hz' },
        { label: 'Fonte', value: '650W 80 Plus' },
        { label: 'Refrigeração', value: 'Watercooler 360mm + 6 fans com controladora' },
        { label: 'Gabinete', value: 'Husky aquario branco' },
        { label: 'Periféricos', value: 'Teclado e Mouse Mancer' },
      ],
      valuePoints: [
        { icon: 'bolt', label: 'Pronto para jogar' },
        { icon: 'monitor', label: 'Monitor 200Hz incluso' },
        { icon: 'package', label: 'Setup completo' },
      ],
    },
    {
      id: 'sem-monitor',
      buttonLabel: 'Sem Monitor',
      title: 'Setup Premium Ryzen 5 5500 + GTX 1080TI + 24 GB DDR4',
      price: 'R$ 6.200,00',
      specifications: [
        { label: 'Processador', value: 'AMD Ryzen 5 5500' },
        { label: 'Memória', value: '24 GB DDR4' },
        { label: 'Armazenamento', value: '1 TB' },
        { label: 'Placa de vídeo', value: 'NVIDIA GeForce GTX 1080TI' },
        { label: 'Placa-mãe', value: 'ASUS TUF GAMING' },
        { label: 'Monitor', value: 'Sem monitor' },
        { label: 'Fonte', value: '650W 80 Plus' },
        { label: 'Refrigeração', value: 'Watercooler 360mm + 6 fans com controladora' },
        { label: 'Gabinete', value: 'Husky aquario branco' },
        { label: 'Periféricos', value: 'Teclado e Mouse Mancer' }
      ],
      valuePoints: [
        { icon: 'bolt', label: 'Pronto para jogar' },
      ],
    },
  ],
  media: [
    {
      type: 'image',
      src: '/imagens/setup-completo.webp',
      thumbSrc: '/imagens/thumbs/setup-completo.webp',
      alt: 'Setup completo',
    },
    {
      type: 'image',
      src: '/imagens/setup-completo-dia.webp',
      thumbSrc: '/imagens/thumbs/setup-completo-dia.webp',
      alt: 'Setup completo durante o dia',
    },
    {
      type: 'image',
      src: '/imagens/placa-de-video.webp',
      thumbSrc: '/imagens/thumbs/placa-de-video.webp',
      alt: 'Placa de video',
    },
    {
      type: 'image',
      src: '/imagens/setup-visao-geral.webp',
      thumbSrc: '/imagens/thumbs/setup-visao-geral.webp',
      alt: 'Setup visão geral',
    },
    {
      type: 'image',
      src: '/imagens/setup-rgb-azul.webp',
      thumbSrc: '/imagens/thumbs/setup-rgb-azul.webp',
      alt: 'Setup com rgb azul',
    },
    {
      type: 'video',
      src: '/videos/mostrando-setup.webm',
      alt: 'Video mostrando o setup completo',
      poster: '/imagens/setup-completo.webp',
      thumbSrc: '/imagens/thumbs/setup-completo.webp',
    },
    {
      type: 'video',
      src: '/videos/mostrando-componentes.webm',
      alt: 'Video mostrando os componentes do setup',
      poster: '/imagens/placa-de-video.webp',
      thumbSrc: '/imagens/thumbs/placa-de-video.webp',
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
