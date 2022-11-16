import React from 'react'
import { BackTop, message, Col, Row } from 'antd'
import Link from 'components/NextLink/NextLink'
import { ArrowUpOutlined } from '@ant-design/icons'
import siteConfig from '../../config/site.config'

const Footer = () => {
  const addNetworkToWallet = async () => {
    try {
      window.ethereum
        .request({ method: 'wallet_addEthereumChain', params: siteConfig.addToMetamask })
        .then(() => {
          message.success('Success, Chain added!')
        })
        .catch((error) => {
          message.error(`Error: ${error?.message}`)
        })
    } catch (error) {
      message.error(`Error: ${error?.message}`)
    }
  }
  return (
    <>
      <footer className="footer-container-wrapper">
        <div className="footer-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={24} md={9} className="footer-info">
              <div className="info-title">
                <img src={siteConfig.siteLogo} alt="" />
                <span>Powered by {siteConfig.company} Chain</span>
              </div>
              <p className="info-desc">{siteConfig.siteTitle} is a Block Explorer and Analytics Platform</p>
              <ul className="list-social">
                <li>
                  <Link href="/"><img src="/images/icon/telegram.svg" alt="" /></Link>
                </li>
                <li>
                  <Link href="/"><img src="/images/icon/facebook.svg" alt="" /></Link>
                </li>
                <li>
                  <Link href="/"><img src="/images/icon/reddit.svg" alt="" /></Link>
                </li>
                <li>
                  <Link href="/"><img src="/images/icon/gmail.svg" alt="" /></Link>
                </li>
              </ul>
              <p className="copyright">{siteConfig.siteTitle} 2022</p>
            </Col>
            <Col xs={24} sm={12} md={5} className="footer-link">
              <h2 className="link-title">Company</h2>
              <ul className="list-link">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Terms of Service</Link>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={5} className="footer-link">
              <h2 className="link-title">Resources</h2>
              <ul className="list-link">
                <li>
                  <Link href="/">Knowledge Base</Link>
                </li>
                <li>
                  <Link href="/">Newsletter</Link>
                </li>
                <li>
                  <Link href="/">Network Status</Link>
                </li>
                <li>
                  <Link href="/">Disqus Comments</Link>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={5} className="footer-link">
              <h2 className="link-title">Products & Services</h2>
              <ul className="list-link">
                <li>
                  <Link href="/">Advertise</Link>
                </li>
                <li>
                  <Link href="/">{siteConfig.siteTitle}</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
      <BackTop duration={10}>
        <div className="crollTop">
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </>
  )
}

export default Footer
