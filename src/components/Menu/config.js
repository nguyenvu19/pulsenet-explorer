import siteConfig from '../../config/site.config'

const config = [
  {
    label: 'Home',
    href: '/',
    items: [],
  },
  {
    label: 'Blockchain',
    items: [
      {
        label: 'View Txns',
        href: '/txs',
        showBorder: true,
      },
      {
        label: 'View Blocks',
        href: '/blocks',
      },
    ],
  },
  {
    label: 'Tokens',
    items: [
      {
        label: 'View Txns',
        href: '/txs',
        showBorder: true,
      },
      {
        label: 'View Blocks',
        href: '/blocks',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    items: [
      {
        label: 'View Txns',
        href: '/txs',
        showBorder: true,
      },
      {
        label: 'View Blocks',
        href: '/blocks',
      },
    ],
  },
  {
    label: 'More',
    href: '/more',
    items: [
      {
        label: 'View Txns',
        href: '/txs',
        showBorder: true,
      },
      {
        label: 'View Blocks',
        href: '/blocks',
      },
    ],
  },
]

export default config
