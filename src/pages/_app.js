import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
import TimeAgo from 'javascript-time-ago'
import Script from 'next/script'
import withReduxSaga from 'next-redux-saga'
import { ThemeContextProvider } from 'containers/ThemeContext'
import { wrapper } from 'redux/store'
import 'antd/dist/antd.css'
import 'styles/index.scss'

TimeAgo.addLocale(en)
TimeAgo.addLocale(ru)

const CustomApp = ({ Component, ...rest }) => {
  if (Component.pure) {
    return <Component {...rest.pageProps} />
  }

  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment

  const { store } = wrapper.useWrappedStore(rest)

  return (
    <>
      <Provider store={store}>
        <ThemeContextProvider>
          <Layout>
            <Component {...rest.pageProps} />
          </Layout>
        </ThemeContextProvider>
      </Provider>
      <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTAG}');
      `,
        }}
      />
    </>
  )
}

export default withReduxSaga(CustomApp)
