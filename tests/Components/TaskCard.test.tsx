import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// components
import TaskCard from '../../components/TaskCard'
import Provider from '../provider'

const completedTask = {
  description: 'completed task',
  isCompleted: true,
  _id: '6149ed234793cdaf9db22823',
  created_at: new Date('2021-09-21T14:33:07.903Z')
}

const incompletedTask = {
  description: 'incompleted task',
  isCompleted: false,
  _id: '6149ed234793cdaf9db22823',
  created_at: new Date('2021-09-21T14:33:07.903Z')
}

test('taskcard renders correctly for completed case', () => {
  render(
    <Provider>
      <TaskCard
        task={completedTask}
        openDeleteTaskModal={() => {}}
        openEditTaskModal={() => {}}
        toggleIscompletedOfTask={() => {}}
      />
    </Provider>
  )

  const description = screen.getByText('completed task')
  const switchButton = screen.getByRole('button', { name: 'Switch Case' })
  const editButton = screen.getByRole('button', { name: 'Edit' })
  const deleteButton = screen.getByRole('button', { name: 'Delete' })
  const createdTime = screen.getByTestId('taskcard-time')

  expect(description).toBeInTheDocument()
  expect(switchButton).toBeInTheDocument()
  expect(editButton).toBeInTheDocument()
  expect(deleteButton).toBeInTheDocument()
  expect(createdTime).toBeInTheDocument()

  expect(description.style.getPropertyValue('--textDecoration')).toBe(
    'line-through var(--c-green)'
  )

  expect(
    switchButton.firstElementChild!.className.includes('checkCircleIcon')
  ).toBe(true)
  expect(
    switchButton!.children[0].firstElementChild!.getAttribute('title')
  ).toBe('CheckCircle')

  expect(editButton.className.includes('iconButton')).toBe(true)
  expect(editButton!.firstElementChild!.getAttribute('title')).toBe('Pen')

  expect(deleteButton.className.includes('iconButton')).toBe(true)
  expect(deleteButton!.firstElementChild!.getAttribute('title')).toBe(
    'Wastebasket'
  )
})

test('taskcard renders correctly for incompleted case', () => {
  render(
    <Provider>
      <TaskCard
        task={incompletedTask}
        openDeleteTaskModal={() => {}}
        openEditTaskModal={() => {}}
        toggleIscompletedOfTask={() => {}}
      />
    </Provider>
  )

  const description = screen.getByText('incompleted task')
  const switchButton = screen.getByRole('button', { name: 'Switch Case' })
  const editButton = screen.getByRole('button', { name: 'Edit' })
  const deleteButton = screen.getByRole('button', { name: 'Delete' })
  const createdTime = screen.getByTestId('taskcard-time')

  expect(description).toBeInTheDocument()
  expect(switchButton).toBeInTheDocument()
  expect(editButton).toBeInTheDocument()
  expect(deleteButton).toBeInTheDocument()
  expect(createdTime).toBeInTheDocument()

  expect(description.style.getPropertyValue('--textDecoration')).toBe('none')

  expect(
    switchButton.firstElementChild!.className.includes('emptyCheckBox')
  ).toBe(true)

  expect(editButton.className.includes('iconButton')).toBe(true)
  expect(editButton!.firstElementChild!.getAttribute('title')).toBe('Pen')

  expect(deleteButton.className.includes('iconButton')).toBe(true)
  expect(deleteButton!.firstElementChild!.getAttribute('title')).toBe(
    'Wastebasket'
  )
})
