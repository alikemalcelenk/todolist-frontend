import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// components
import CompletedPage from '../../../components/PageContents/Completed'
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
  }),
  rest.delete(`${baseURL}/6149ed234793cdaf9db22823`, (req: any, res, ctx) => {
    return res(
      ctx.json({
        task: {
          description: 'test1',
          isCompleted: true,
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

test('delete task method renders correctly in completed page', async () => {
  render(
    <Provider>
      <CompletedPage />
    </Provider>
  )

  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()
  await waitFor(() => expect(loading).not.toBeInTheDocument()) // dataların çekilmesini bekledim

  // given
  const deleteButton = screen.getAllByRole('button', { name: 'delete' })[0]
  const secondTaskDescription = screen.getAllByTestId('taskcard-description')[1] // 2. taskin açıklaması. 1. sıradakini sildiğim için silindikten sonra 1. sıra bu olmuş mu onu kontrol edicem.
  expect(deleteButton).toBeInTheDocument()

  // when
  userEvent.click(deleteButton!)
  const deleteModalButton = screen.getByRole('button', {
    name: 'delete-modal'
  })
  userEvent.click(deleteModalButton!)

  // given
  await waitFor(() =>
    expect(
      screen.queryByTestId('modal-deletebutton-box') // null kontrolü için query kullandım
    ).not.toBeInTheDocument()
  )
  expect(secondTaskDescription.textContent).toBe(
    screen.getAllByTestId('taskcard-description')[0].textContent
  )
})
