import '../../public/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

if (process.env.NODE_ENV === 'development') {
  require('../tests/mocks')
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
