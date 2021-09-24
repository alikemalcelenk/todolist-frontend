import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// components
import TaskBar from '../../components/TaskBar'
import Provider from '../provider'

test('taskbar renders correctly', () => {
  render(
    <Provider>
      <TaskBar />
    </Provider>
  )

  const taskInput = screen.getByPlaceholderText('Add a new task...')
  let createButton = screen.queryByRole('button', { name: 'Add Task' }) // query kullanma nedenim, hiç eleman olmasa bile null dönmesi
  expect(taskInput).toBeInTheDocument()
  expect(createButton).not.toBeInTheDocument()
  expect(taskInput).toHaveValue('')

  const taskDescription = 'Create task'
  userEvent.type(taskInput, taskDescription)
  expect(taskInput).toHaveValue('Create task')
  createButton = screen.getByRole('button', { name: 'Add Task' })
  expect(createButton).toBeInTheDocument() // inputa bir şeyler yazınca buton aktif oluyor
  expect(createButton.className.includes('taskBarButton')).toBe(true)
  expect(createButton!.firstElementChild!.getAttribute('title')).toBe('Plus')
})
