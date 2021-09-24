import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// components
import TaskDeleteModal from '../../components/Modals/TaskDelete'
import Provider from '../provider'

const task = {
  description: 'completed task',
  isCompleted: true,
  _id: '6149ed234793cdaf9db22823',
  created_at: new Date('2021-09-21T14:33:07.903Z')
}

test('deletetask modal renders correctly', () => {
  render(
    <Provider>
      <TaskDeleteModal task={task} isVisible closeModal={() => {}} />
    </Provider>
  )

  const headerText = screen.getByText(
    'Are you sure you want to delete this task?'
  )
  const headerIcon = screen.getByTitle('Wastebasket')
  const descriptionTitle = screen.getByText('Task to delete:')
  const description = screen.getByText('completed task')
  const deleteButton = screen.getByRole('button', {
    name: 'Delete in Modal'
  })
  const cancelButton = screen.getByRole('button', {
    name: 'Cancel in DeleteTaskModal'
  })

  expect(headerText).toBeInTheDocument()
  expect(headerIcon).toBeInTheDocument()
  expect(descriptionTitle).toBeInTheDocument()
  expect(description).toBeInTheDocument()
  expect(deleteButton).toBeInTheDocument()
  expect(cancelButton).toBeInTheDocument()

  expect(deleteButton.firstElementChild!.textContent).toBe('Delete')
  expect(deleteButton.className.includes('deleteButton')).toBe(true)

  expect(cancelButton.firstElementChild!.textContent).toBe('Cancel')
  expect(cancelButton.className.includes('cancelButton')).toBe(true)
})
