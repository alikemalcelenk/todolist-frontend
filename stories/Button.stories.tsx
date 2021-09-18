import { Story } from '@storybook/react'

// components
import NavigationButtonComponent from '../components/Navigation/Button'
import NavigationComponent from '../components/Navigation'
import LogoComponent from '../components/Logo'
import AddTaskBarButtonComponent from '../components/AddTaskBar/Button'

// elements
import Box from '../components/Elements/box'

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

export const AddTask: Story = () => (
  <Box className="addTaskBox">
    <AddTaskBarButtonComponent addTask={() => true} />
  </Box>
)
