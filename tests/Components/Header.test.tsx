import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// components
import Header from '../../components/Header'
import Provider from '../provider'

test('header renders correctly for home page', async () => {
  render(
    <Provider>
      <Header selectedPage="home" />
    </Provider>
  )

  const header = screen.getByTitle('Header')
  expect(header).toBeInTheDocument()

  // header.children[0] = <Logo>
  const logoSvg = header.children[0].children[0]
  const headerText = header.children[0].children[1]
  expect(logoSvg).toBeInTheDocument()
  expect(headerText).toBeInTheDocument()
  expect(logoSvg).toBe(screen.getByTitle('Logo'))
  expect(headerText).toBe(screen.getByText('Todolist'))

  // header.children[1] = <Navigation>
  const completedText = screen.getByText('Completed')
  expect(completedText).toBeInTheDocument()
  expect(completedText).toBe(header.children[1].children[0].firstElementChild)

  const incompletedText = screen.getByText('Incompleted')
  expect(incompletedText).toBeInTheDocument()
  expect(incompletedText).toBe(header.children[1].children[1].firstElementChild)

  const navigationButtons = screen.getAllByTestId('navigation-button')
  expect(navigationButtons[0]).toBe(header.children[1].firstElementChild)

  expect(navigationButtons.length).toBe(2)
  expect(completedText.className.includes('selectedButtonText')).toBe(false)
  expect(incompletedText.className.includes('selectedButtonText')).toBe(false)
})

test('header renders correctly for completed page', async () => {
  render(
    <Provider>
      <Header selectedPage="completed" />
    </Provider>
  )

  const header = screen.getByTitle('Header')
  expect(header).toBeInTheDocument()

  // header.children[0] = <Logo>
  const logoSvg = header.children[0].children[0]
  const headerText = header.children[0].children[1]
  expect(logoSvg).toBeInTheDocument()
  expect(headerText).toBeInTheDocument()
  expect(logoSvg).toBe(screen.getByTitle('Logo'))
  expect(headerText).toBe(screen.getByText('Todolist'))

  // header.children[1] = <Navigation>
  const completedText = screen.getByText('Completed')
  expect(completedText).toBeInTheDocument()
  expect(completedText).toBe(header.children[1].children[0].firstElementChild)

  const incompletedText = screen.getByText('Incompleted')
  expect(incompletedText).toBeInTheDocument()
  expect(incompletedText).toBe(header.children[1].children[1].firstElementChild)

  const navigationButtons = screen.getAllByTestId('navigation-button')
  expect(navigationButtons[0]).toBe(header.children[1].firstElementChild)

  expect(navigationButtons.length).toBe(2)
  expect(completedText.className.includes('selectedButtonText')).toBe(true)
  expect(incompletedText.className.includes('selectedButtonText')).toBe(false)
})

test('header renders correctly for incompleted page', () => {
  render(
    <Provider>
      <Header selectedPage="incompleted" />
    </Provider>
  )

  const header = screen.getByTitle('Header')
  expect(header).toBeInTheDocument()

  // header.children[0] = <Logo>
  const logoSvg = header.children[0].children[0]
  const headerText = header.children[0].children[1]
  expect(logoSvg).toBeInTheDocument()
  expect(headerText).toBeInTheDocument()
  expect(logoSvg).toBe(screen.getByTitle('Logo'))
  expect(headerText).toBe(screen.getByText('Todolist'))

  // header.children[1] = <Navigation>
  const completedText = screen.getByText('Completed')
  expect(completedText).toBeInTheDocument()
  expect(completedText).toBe(header.children[1].children[0].firstElementChild)

  const incompletedText = screen.getByText('Incompleted')
  expect(incompletedText).toBeInTheDocument()
  expect(incompletedText).toBe(header.children[1].children[1].firstElementChild)

  const navigationButtons = screen.getAllByTestId('navigation-button')
  expect(navigationButtons[0]).toBe(header.children[1].firstElementChild)

  expect(navigationButtons.length).toBe(2)
  expect(completedText.className.includes('selectedButtonText')).toBe(false)
  expect(incompletedText.className.includes('selectedButtonText')).toBe(true)
})
