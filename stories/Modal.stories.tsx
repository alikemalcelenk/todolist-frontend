import { Story } from '@storybook/react'

// components
import EditTaskModalComponent from '../components/Modals/EditTask'
import DeleteTaskModalComponent from '../components/Modals/DeleteTask'

export default {
  title: 'Modals'
}

const task = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isCompleted: false,
  created_at: new Date('2021-09-19T15:10:18.164+00:00')
}

export const EditTask: Story = () => (
  <EditTaskModalComponent task={task} isVisible closeModal={() => true} />
)

export const DeleteTask: Story = () => (
  <DeleteTaskModalComponent task={task} isVisible closeModal={() => true} />
)
