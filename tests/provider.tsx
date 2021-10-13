import { FunctionComponent } from 'react'

// style
import '../styles/app.css'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer } from '@redux/reducers'
import mySaga from '@redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(mySaga)

const ProviderPage: FunctionComponent = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ProviderPage
