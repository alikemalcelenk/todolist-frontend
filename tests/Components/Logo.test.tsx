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

  const HeaderText = screen.getByText('Todolist')
  const LogoSvg = screen.getByTitle('Logo')
  expect(HeaderText).toBeInTheDocument()
  expect(LogoSvg).toBeInTheDocument()
})
