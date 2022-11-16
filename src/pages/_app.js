import React, { Fragment } from 'react'
import app from 'next/app'
import { Provider } from 'react-redux'
import TimeAgo from 'javascript-time-ago'
import Script from 'next/script'
import withReduxSaga from 'next-redux-saga'
import { ThemeContextProvider } from 'containers/ThemeContext'
import { wrapper } from 'redux/store'

import PublicLayout from 'layouts/PublicLayout'

import 'antd/dist/antd.css'
import 'styles/index.scss'

TimeAgo.addLocale(
  {
    locale: "en",
    long: {
      second: {
        past: {
          one: "{0}s ago",
          other: "{0}s ago"
        },
        future: {
          one: "in {0}s",
          other: "in {0}s"
        }
      },
      minute: {
        past: {
          one: "{0}m ago",
          other: "{0}m ago"
        },
        future: {
          one: "in {0}m",
          other: "in {0}m"
        }
      },
      hour: {
        past: {
          one: "{0}h ago",
          other: "{0}h ago"
        },
        future: {
          one: "in {0}h",
          other: "in {0}h"
        }
      },
    }
  }
)
TimeAgo.addLocale({
  locale: "ru",
  long: {
    second: {
      past: {
        one: "{0}s назад",
        other: "{0}s назад"
      },
      future: {
        one: "в {0}s",
        other: "в {0}s"
      }
    },
    minute: {
      past: {
        one: "{0}m назад",
        other: "{0}m назад"
      },
      future: {
        one: "в {0}m",
        other: "в {0}m"
      }
    },
    hour: {
      past: {
        one: "{0}h назад",
        other: "{0}h назад"
      },
      future: {
        one: "в {0}h",
        other: "в {0}h"
      }
    },
  }
})

class MyApp extends app {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    return (
      <>
        <CustomApp {...this.props} />
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
}

const CustomApp = ({ Component, ...rest }) => {
  if (Component.pure) {
    return <Component {...rest.pageProps} />
  }

  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || PublicLayout

  const { store } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          <Component {...rest.pageProps} />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  )
}

export default wrapper.withRedux(withReduxSaga(MyApp))
