import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// components
import TaskEditModal from '../../components/Modals/TaskEdit'
import Provider from '../provider'

const task = {
  description: 'completed task',
  isCompleted: true,
  _id: '6149ed234793cdaf9db22823',
  created_at: new Date('2021-09-21T14:33:07.903Z')
}

test('edittask modal renders correctly', () => {
  render(
    <Provider>
      <TaskEditModal task={task} isVisible closeModal={() => {}} />
    </Provider>
  )

  const headerText = screen.getByText('Edit Task')
  const headerIcon = screen.getByTitle('Pen')
  const taskInput = screen.getByPlaceholderText('Edit task...')
  const editButton = screen.getByRole('button', {
    name: 'Edit in Modal'
  })
  const cancelButton = screen.getByRole('button', {
    name: 'Cancel in EditTaskModal'
  })

  expect(headerText).toBeInTheDocument()
  expect(headerIcon).toBeInTheDocument()
  expect(taskInput).toBeInTheDocument()
  expect(taskInput).toHaveValue('completed task')
  expect(cancelButton).toBeInTheDocument()
  expect(cancelButton).toBeEnabled()

  expect(editButton).toBeInTheDocument()
  expect(editButton).toBeDisabled()
  userEvent.type(taskInput, 'test description')
  expect(editButton).toBeEnabled()

  expect(editButton.firstElementChild!.textContent).toBe('Update')
  expect(editButton.className.includes('updateButton')).toBe(true)

  expect(cancelButton.firstElementChild!.textContent).toBe('Cancel')
  expect(cancelButton.className.includes('cancelButton')).toBe(true)
})
