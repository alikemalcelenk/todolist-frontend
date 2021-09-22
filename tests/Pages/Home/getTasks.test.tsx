import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// components
import HomePage from '../../../components/PageContents/Home'
import Provider from '../../provider'

// config
import env from '../../../config/env'

const baseURL = `${env.API_SERVICE_URL}`

const server = setupServer(
  rest.get(baseURL, (req, res, ctx) => {
    return res(
      ctx.json({
        tasks: [
          {
            description: 'test1',
            isCompleted: false,
            _id: '6149ed234793cdaf9db22823',
            created_at: new Date('2021-09-21T14:33:07.903Z')
          },
          {
            description: 'test2',
            isCompleted: false,
            _id: '6149ed234793cdaf9db22821',
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

test('get tasks method renders correctly in home page', async () => {
  render(
    <Provider>
      <HomePage />
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
    screen.getAllByRole('button', { name: 'is-complete' })[0]
  ).toBeInTheDocument()
  expect(screen.getAllByRole('button', { name: 'edit' })[0]).toBeInTheDocument()
  expect(
    screen.getAllByRole('button', { name: 'delete' })[0]
  ).toBeInTheDocument()

  expect(screen.getByText('test2')).toBeInTheDocument()
  expect(
    screen.getAllByRole('button', { name: 'is-complete' })[1]
  ).toBeInTheDocument()
  expect(screen.getAllByRole('button', { name: 'edit' })[1]).toBeInTheDocument()
  expect(
    screen.getAllByRole('button', { name: 'delete' })[1]
  ).toBeInTheDocument()
})
