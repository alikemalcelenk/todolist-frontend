import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// components
import Footer from '@components/Footer'
import Provider from '../provider'

test('footer renders correctly', () => {
  render(
    <Provider>
      <Footer />
    </Provider>
  )

  const footerText = screen.getByText('Todolist @2021')
  expect(footerText).toBeInTheDocument()
  expect(footerText.parentElement!.tagName).toBe('DIV')
  expect(footerText.parentElement).toHaveStyle(
    'background-color: var(--c-darkGray);'
  )
})
