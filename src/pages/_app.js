import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
import TimeAgo from 'javascript-time-ago'
import PublicLayout from 'layouts/PublicLayout'
import { ThemeContextProvider } from 'containers/ThemeContext'
import initStore from 'redux/store'
import 'antd/dist/antd.css'
import 'styles/index.scss'

TimeAgo.addLocale(en)
TimeAgo.addLocale(ru)

class CustomApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    const Layout = Component.Layout || PublicLayout
    return (
      <Provider store={store}>
        <ThemeContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeContextProvider>
      </Provider>
    )
  }
}

export default withRedux(initStore)(CustomApp)
