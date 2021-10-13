import { Story } from '@storybook/react'

// components
import TaskCardComponent from '../components/TaskCard'

export default {
  title: 'Card'
}

const task = {
  _id: '1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isCompleted: false,
  created_at: new Date('2021-09-18T15:10:18.164+00:00')
}

export const TaskCard: Story = () => (
  <TaskCardComponent
    task={task}
    openDeleteTaskModal={() => true}
    openEditTaskModal={() => true}
    switchCompletionOfTask={() => true}
  />
)
