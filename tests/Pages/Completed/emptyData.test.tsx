import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// components
import CompletedPage from '@pages/completed'
import Provider from '@tests/provider'

// config
import env from '@config/env'

const baseURL = `${env.API_SERVICE_URL}`

const server = setupServer(
  rest.get(baseURL, (req, res, ctx) => {
    return res(
      ctx.json({
        tasks: []
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('empty message renders correctly in completed page', async () => {
  render(
    <Provider>
      <CompletedPage />
    </Provider>
  )

  // header control
  const logoSvg = screen.getByTitle('Logo')
  const headerText = screen.getByText('Todolist')
  const completedText = screen.getByText('Completed')
  const incompletedText = screen.getByText('Incompleted')
  expect(logoSvg).toBeInTheDocument()
  expect(headerText).toBeInTheDocument()
  expect(completedText).toBeInTheDocument()
  expect(incompletedText).toBeInTheDocument()

  // footer control
  const footerText = screen.getByText('Todolist @2021')
  expect(footerText).toBeInTheDocument()

  // wait for coming data
  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()
  await waitFor(() => expect(loading).not.toBeInTheDocument())

  // empty data control
  const emptyMessage = screen.getByText(
    'There are not any completed tasks in our records.'
  )
  expect(emptyMessage).toBeInTheDocument()
})
