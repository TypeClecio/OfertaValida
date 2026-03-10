import type { ProductInfo } from '../types'

export const sellerPhone = '558899778856'

export const productInfo: ProductInfo = {
  configurations: [
    {
      id: 'ryzen-7-5700x',
      buttonLabel: 'Ryzen 7 5700X',
      title: 'PC Gamer Ryzen 7 5700X - Setup Completo',
      subtitle: 'Computador de mesa de alta performance com monitor 200Hz e perifericos inclusos.',
      price: 'R$ 9.500,00',
      highlights: [
        'Ryzen 7 5700X + GTX 1080TI',
        '24 GB RAM DDR4 e 1 TB de armazenamento',
        'Watercooler 360mm + 6 fans com controladora',
        'Monitor 200Hz e teclado Mancer Ghost',
      ],
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
      title: 'PC Gamer Ryzen 5 5500 - Setup Completo',
      subtitle: 'Versao com melhor custo-beneficio, mantendo monitor 200Hz e perifericos inclusos.',
      price: 'R$ 8.700,00',
      highlights: [
        'Ryzen 5 5500 + GTX 1080TI',
        '24 GB RAM DDR4 e 1 TB de armazenamento',
        'Watercooler 360mm + 6 fans com controladora',
        'Monitor 200Hz e teclado Mancer Ghost',
      ],
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
}
