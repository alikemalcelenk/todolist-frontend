import { Story } from '@storybook/react'

// components
import NavigationButtonComponent from '../components/Navigation/Button'
import NavigationComponent from '../components/Navigation'
import LogoComponent from '../components/Logo'
import TaskBarButtonComponent from '../components/TaskBar/Button'
import ModalCancelComponent from '../components/Modals/EditTask/Footer/CancelButton'
import ModalUpdateComponent from '../components/Modals/EditTask/Footer/UpdateButton'
import ModalDeleteComponent from '../components/Modals/DeleteTask/Footer/DeleteButton'

// elements
import Box from '../components/Elements/Box'

const task = {
  _id: '1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isCompleted: false,
  created_at: new Date('2021-09-19T15:10:18.164+00:00')
}

export default {
  title: 'Buttons'
}

export const NavigationCompleted: Story = () => (
  <NavigationButtonComponent type="completed" />
)

export const NavigationIncompleted: Story = () => (
  <NavigationButtonComponent type="incompleted" />
)

export const Navigation: Story = () => (
  <NavigationComponent selectedPage="completed" />
)

export const Logo: Story = () => <LogoComponent />

export const Task: Story = () => (
  <Box className="taskBox">
    <TaskBarButtonComponent addTask={() => true} isLoadingAddTask={false} />
  </Box>
)

export const ModalCancel: Story = () => (
  <ModalCancelComponent closeModal={() => true} />
)

export const ModalUpdate: Story = () => (
  <ModalUpdateComponent task={task} newTask="test" editTask={() => true} />
)

export const ModalDelete: Story = () => (
  <ModalDeleteComponent task={task} deleteTask={() => true} />
)
