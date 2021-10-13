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
        tasks: [
          {
            description: 'test1',
            isCompleted: true,
            _id: '6149ed234793cdaf9db22823',
            created_at: new Date('2021-09-21T14:33:07.903Z')
          },
          {
            description: 'test2',
            isCompleted: false,
            _id: '6149ed234793cdaf9db22821',
            created_at: new Date('2021-09-21T14:33:07.903Z')
          },
          {
            description: 'test3',
            isCompleted: true,
            _id: '6149ed234793cdaf9db22824',
            created_at: new Date('2021-09-21T14:33:07.903Z')
          }
        ]
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('get tasks method renders correctly in completed page', async () => {
  render(
    <Provider>
      <CompletedPage />
    </Provider>
  )

  // given
  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()

  // when
  await waitFor(() => expect(loading).not.toBeInTheDocument())

  // then
  expect(screen.getByText('test1')).toBeInTheDocument()
  expect(
    screen.getAllByRole('button', { name: 'Switch Case' })[0]
  ).toBeInTheDocument()
  expect(screen.getAllByRole('button', { name: 'Edit' })[0]).toBeInTheDocument()
  expect(
    screen.getAllByRole('button', { name: 'Delete' })[0]
  ).toBeInTheDocument()

  expect(screen.queryByText('test2')).not.toBeInTheDocument()

  expect(screen.getByText('test3')).toBeInTheDocument()
  expect(
    screen.getAllByRole('button', { name: 'Switch Case' })[1]
  ).toBeInTheDocument()
  expect(screen.getAllByRole('button', { name: 'Edit' })[1]).toBeInTheDocument()
  expect(
    screen.getAllByRole('button', { name: 'Delete' })[1]
  ).toBeInTheDocument()

  expect(screen.getAllByTestId('taskcard-description').length).toBe(2)
  expect(screen.getAllByRole('button', { name: 'Switch Case' }).length).toBe(2)
  expect(screen.getAllByRole('button', { name: 'Edit' }).length).toBe(2)
  expect(screen.getAllByRole('button', { name: 'Delete' }).length).toBe(2)
})
