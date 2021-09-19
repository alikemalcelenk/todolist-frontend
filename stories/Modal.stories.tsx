import { Story } from '@storybook/react'

// components
import EditTaskModalComponent from '../components/Modals/EditTask/index'

export default {
  title: 'Modals'
}

const task = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isCompleted: false,
  created_at: new Date('2020-11-01T15:10:18.164+00:00')
}

export const EditTaskModal: Story = () => (
  <EditTaskModalComponent task={task} isVisible closeModal={() => true} />
)
