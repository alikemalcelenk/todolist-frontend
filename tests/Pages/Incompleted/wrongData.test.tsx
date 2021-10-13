import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// components
import IncompletedPage from '@pages/incompleted'
import Provider from '@tests/provider'

// config
import env from '@config/env'

const baseURL = `${env.API_SERVICE_URL}`

const server = setupServer(
  rest.get(baseURL, (req, res, ctx) => {
    return res(ctx.status(500))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('error message renders correctly in incompleted page', async () => {
  render(
    <Provider>
      <IncompletedPage />
    </Provider>
  )

  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()
  await waitFor(() => expect(loading).not.toBeInTheDocument())

  // wrong data control
  const errorMessage = screen.getByText(
    'While fetching the tasks, an error occurred. Please try again.'
  )
  expect(errorMessage).toBeInTheDocument()
})
