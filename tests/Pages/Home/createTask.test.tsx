import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// components
import HomePage from '../../../pages'
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
  }),
  rest.post(baseURL, (req: any, res, ctx) => {
    if (req.body.description) {
      return res(
        ctx.json({
          task: {
            _id: '6149ed234793cdaf9db22822',
            description: 'Create task',
            isCompleted: false,
            created_at: '2021-09-21T14:33:07.903Z'
          }
        })
      )
    }

    return res()
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('create task method renders correctly in home page', async () => {
  render(
    <Provider>
      <HomePage />
    </Provider>
  )

  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()
  await waitFor(() => expect(loading).not.toBeInTheDocument())

  // given
  let createButton = screen.queryByRole('button', { name: 'Add Task' }) // query kullanma nedenim, hiç eleman olmasa bile null dönmesi
  const taskInput = screen.getByPlaceholderText('Add a new task...')
  expect(taskInput).toBeInTheDocument()
  expect(createButton).not.toBeInTheDocument()
  expect(taskInput).toHaveValue('')

  // when
  const taskDescription = 'Create task'
  userEvent.type(taskInput, taskDescription)
  expect(taskInput).toHaveValue('Create task')
  createButton = screen.getByRole('button', { name: 'Add Task' })
  expect(createButton).toBeInTheDocument()
  userEvent.click(createButton)

  // then
  await waitFor(() => expect(taskInput).toHaveValue(''))
  expect(
    screen.queryByRole('button', { name: 'Add Task' })
  ).not.toBeInTheDocument()
  expect(screen.getByText(taskDescription))
})
