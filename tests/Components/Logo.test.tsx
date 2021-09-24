import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// components
import Logo from '../../components/Header'
import Provider from '../provider'

test('header renders correctly for home page', async () => {
  render(
    <Provider>
      <Logo selectedPage="home" />
    </Provider>
  )

  const headerText = screen.getByText('Todolist')
  const logoSvg = screen.getByTitle('Logo')
  expect(headerText).toBeInTheDocument()
  expect(logoSvg).toBeInTheDocument()
})
