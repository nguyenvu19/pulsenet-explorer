const siteConfig = {
  appName: 'Pulse Faucet Testnet',
  chainName: 'Pulse Chain Testnet',
  chainId: 30393,
  siteIcon: 'ion-flash',
  footerText: `Explorer`,
  enableAnimatedRoute: false,
  apiUrl: 'http://yoursite.com/api/',
  google: {
    analyticsKey: 'UA-xxxxxxxxx-1',
  },
  dashboard: '/dashboard',
  // Edit
  homeUrl: 'https://pulsenet.io',
  rpc: 'https://testnet-rpc-dataseed1.pulsenet.io',
  scan_url: 'https://testnet.pulsescan.io',
  faucet_url: 'https://testnet-faucet.pulsenet.io',
  nativeCurrency: {
    name: 'PULSE',
    symbol: 'PULSE',
    decimals: 18,
    address: 'PULSE',
    image: '',
  },
  donateAddress: '0x5694f5a0bda8f95E780218D61311Ed18E6CEbd7c',
}

/**
 * Add to metamask
 */
siteConfig.addToMetamask = [
  {
    chainId: `0x76B9`,
    chainName: siteConfig.chainName,
    nativeCurrency: {
      name: siteConfig.nativeCurrency.name,
      symbol: siteConfig.nativeCurrency.symbol,
      decimals: siteConfig.nativeCurrency.decimals,
    },
    rpcUrls: [siteConfig.rpc],
    blockExplorerUrls: [siteConfig.scan_url],
  },
]

export default siteConfig
