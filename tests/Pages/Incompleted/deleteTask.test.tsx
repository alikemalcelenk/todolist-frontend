import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
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
            isCompleted: true,
            _id: '6149ed234793cdaf9db22821',
            created_at: new Date('2021-09-21T14:33:07.903Z')
          },
          {
            description: 'test3',
            isCompleted: false,
            _id: '6149ed234793cdaf9db22824',
            created_at: new Date('2021-09-21T14:33:07.903Z')
          }
        ]
      })
    )
  }),
  rest.delete(`${baseURL}/6149ed234793cdaf9db22823`, (req: any, res, ctx) => {
    return res(
      ctx.json({
        task: {
          description: 'test1',
          isCompleted: false,
          _id: '6149ed234793cdaf9db22823',
          created_at: new Date('2021-09-21T14:33:07.903Z')
        }
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('delete task method renders correctly in incompleted page', async () => {
  render(
    <Provider>
      <IncompletedPage />
    </Provider>
  )

  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()
  await waitFor(() => expect(loading).not.toBeInTheDocument())

  // given
  const deleteButton = screen.getAllByRole('button', { name: 'Delete' })[0]
  const secondTaskDescription = screen.getAllByTestId('taskcard-description')[1] // 2. taskin a????klamas??. 1. s??radakini sildi??im i??in silindikten sonra 1. s??ra bu olmu?? mu onu kontrol edicem.
  expect(deleteButton).toBeInTheDocument()

  // when
  userEvent.click(deleteButton!)
  const deleteModalButton = screen.getByRole('button', {
    name: 'Delete in Modal'
  })
  const cancelModalButton = screen.queryByRole('button', {
    name: 'Cancel in DeleteTaskModal'
  }) // null kontrol?? i??in query kulland??m
  expect(deleteModalButton).toBeInTheDocument()
  expect(cancelModalButton).toBeInTheDocument()
  userEvent.click(deleteModalButton!)

  // then
  await waitFor(() => expect(cancelModalButton).not.toBeInTheDocument())
  expect(secondTaskDescription.textContent).toBe(
    screen.getAllByTestId('taskcard-description')[0].textContent
  )
})
