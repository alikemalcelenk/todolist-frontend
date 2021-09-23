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
  rest.put(`${baseURL}/6149ed234793cdaf9db22823`, (req: any, res, ctx) => {
    return res(
      ctx.json({
        task: {
          description: 'test1 edit',
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

test('edit task method renders correctly in completed page', async () => {
  render(
    <Provider>
      <CompletedPage />
    </Provider>
  )

  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()
  await waitFor(() => expect(loading).not.toBeInTheDocument()) // dataların çekilmesini bekledim

  // given
  const editButton = screen.getAllByRole('button', { name: 'Edit' })[0]
  expect(editButton).toBeInTheDocument()

  // when
  userEvent.click(editButton!) // modal açıldı
  let editModalInput = screen.getByPlaceholderText('Edit task...')
  expect(editModalInput).toBeInTheDocument()
  userEvent.type(editModalInput!, ' edit')
  const editModalButton = screen.queryByRole('button', {
    name: 'Edit in Modal'
  })
  userEvent.click(editModalButton!)
  editModalInput = screen.queryByPlaceholderText('Edit task...')! // null kontrolü için query kullandım
  await waitFor(() => expect(editModalInput).not.toBeInTheDocument())

  // then
  const newDescription = 'test1 edit'
  const currentDescription = screen.getAllByTestId('taskcard-description')[0]
  expect(currentDescription.textContent).toBe(newDescription)
})
