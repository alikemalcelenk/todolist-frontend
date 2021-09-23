import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
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
            isCompleted: true,
            _id: '6149ed234793cdaf9db22821',
            created_at: new Date('2021-09-21T14:33:07.903Z')
          }
        ]
      })
    )
  }),
  rest.put(`${baseURL}/6149ed234793cdaf9db22823`, (req: any, res, ctx) => {
    if (req.body.isCompleted) {
      return res(
        ctx.json({
          task: {
            description: 'test1',
            isCompleted: req.body.isCompleted,
            _id: '6149ed234793cdaf9db22823',
            created_at: new Date('2021-09-21T14:33:07.903Z')
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

test('toggle isCompleted of task method renders correctly in home page', async () => {
  render(
    <Provider>
      <HomePage />
    </Provider>
  )

  const loading = screen.getByTestId('spinner')
  expect(loading).toBeInTheDocument()
  await waitFor(() => expect(loading).not.toBeInTheDocument()) // dataların çekilmesini bekledim

  // given
  const isCompletedButton = screen.getAllByRole('button', {
    name: 'Switch Case'
  })[0]
  expect(isCompletedButton).toBeInTheDocument()

  // Completed case
  // when
  userEvent.click(isCompletedButton)

  // then
  await waitFor(() =>
    expect(screen.queryByTestId('taskcard-emptyCircle')).not.toBeInTheDocument()
  )
  expect(
    screen.getByText('test1').style.getPropertyValue('--textDecoration')
  ).toBe('line-through var(--c-green)')
  expect(screen.getAllByTestId('taskcard-checkCircle').length).toBe(2)

  // Inompleted case
  // when
  userEvent.click(isCompletedButton)

  // then
  await waitFor(() =>
    expect(screen.queryByTestId('taskcard-emptyCircle')).toBeInTheDocument()
  )
  expect(
    screen.getByText('test1').style.getPropertyValue('--textDecoration')
  ).toBe('none')
  expect(screen.getAllByTestId('taskcard-checkCircle').length).toBe(1)
})
