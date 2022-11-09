import siteConfig from '../../config/site.config'

const config = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Faucet',
    href: siteConfig.faucet_url,
    target: '_blank',
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
]

export default config
