import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

// style
import '../styles/app.css'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer } from '../redux/reducers'
import mySaga from '../redux/sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(mySaga)

const MyApp: FunctionComponent<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>Todolist</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
