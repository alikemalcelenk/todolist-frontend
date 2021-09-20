import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'

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
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
