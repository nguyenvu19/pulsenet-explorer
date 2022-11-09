import siteConfigDev from './site.config.dev'
import siteConfigProd from './site.config.prod'

const siteConfig = process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? siteConfigDev : siteConfigProd

export default siteConfig
