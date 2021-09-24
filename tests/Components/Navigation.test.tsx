import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// components
import Navigation from '../../components/Navigation'
import Provider from '../provider'

test('navigation renders correctly for home page', async () => {
  render(
    <Provider>
      <Navigation selectedPage="home" />
    </Provider>
  )

  const completedText = screen.getByText('Completed')
  const incompletedText = screen.getByText('Incompleted')
  const navigationButtons = screen.getAllByTestId('navigation-button')
  expect(completedText).toBeInTheDocument()
  expect(incompletedText).toBeInTheDocument()
  expect(navigationButtons.length).toBe(2)
  expect(completedText.className.includes('selectedButtonText')).toBe(false)
  expect(incompletedText.className.includes('selectedButtonText')).toBe(false)
})

test('navigation renders correctly for completed page', async () => {
  render(
    <Provider>
      <Navigation selectedPage="completed" />
    </Provider>
  )

  const completedText = screen.getByText('Completed')
  const incompletedText = screen.getByText('Incompleted')
  const navigationButtons = screen.getAllByTestId('navigation-button')
  expect(completedText).toBeInTheDocument()
  expect(incompletedText).toBeInTheDocument()
  expect(navigationButtons.length).toBe(2)
  expect(completedText.className.includes('selectedButtonText')).toBe(true)
  expect(incompletedText.className.includes('selectedButtonText')).toBe(false)
})

test('navigation renders correctly for incompleted page', async () => {
  render(
    <Provider>
      <Navigation selectedPage="incompleted" />
    </Provider>
  )

  const completedText = screen.getByText('Completed')
  const incompletedText = screen.getByText('Incompleted')
  const navigationButtons = screen.getAllByTestId('navigation-button')
  expect(completedText).toBeInTheDocument()
  expect(incompletedText).toBeInTheDocument()
  expect(navigationButtons.length).toBe(2)
  expect(completedText.className.includes('selectedButtonText')).toBe(false)
  expect(incompletedText.className.includes('selectedButtonText')).toBe(true)
})
