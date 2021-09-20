import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'

// style
import '../styles/app.css'

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../redux/reducers'

const store = createStore(reducer)

const MyApp: FunctionComponent<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
