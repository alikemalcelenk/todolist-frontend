import './style.css'
import '../styles/app.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../redux/reducers/index'

const store = createStore(reducer)

export const decorators = [
  (S) => (
    <Provider store={store}>
      <S />
    </Provider>
  )
]
