import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'

// style
import '../styles/app.css'

const MyApp: FunctionComponent<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default MyApp
