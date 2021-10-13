import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// components
import NavigationButton from '@components/Navigation/Button'
import Provider from '../provider'

test('navigation button renders correctly for completed page and selected case', () => {
  render(
    <Provider>
      <NavigationButton type="completed" selected />
    </Provider>
  )

  const completedText = screen.getByText('Completed')
  expect(completedText).toBeInTheDocument()
  expect(completedText.className.includes('selectedButtonText')).toBe(true)
})

test('navigation button renders correctly for completed page and unselected case', () => {
  render(
    <Provider>
      <NavigationButton type="completed" />
    </Provider>
  )

  const completedText = screen.getByText('Completed')
  expect(completedText).toBeInTheDocument()
  expect(completedText.className.includes('selectedButtonText')).toBe(false)
})

test('navigation button renders correctly for incompleted page and selected case', () => {
  render(
    <Provider>
      <NavigationButton type="incompleted" selected />
    </Provider>
  )

  const incompletedText = screen.getByText('Incompleted')
  expect(incompletedText).toBeInTheDocument()
  expect(incompletedText.className.includes('selectedButtonText')).toBe(true)
})

test('navigation button renders correctly for incompleted page and unselected case', () => {
  render(
    <Provider>
      <NavigationButton type="incompleted" />
    </Provider>
  )

  const incompletedText = screen.getByText('Incompleted')
  expect(incompletedText).toBeInTheDocument()
  expect(incompletedText.className.includes('selectedButtonText')).toBe(false)
})
