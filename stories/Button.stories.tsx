import { Story } from '@storybook/react'

// components
import NavigationButtonComponent from '../components/Navigation/Button'
import NavigationComponent from '../components/Navigation/index'

export default {
  title: 'Buttons'
}

export const NavigationCompleted: Story = () => (
  <NavigationButtonComponent type="completed" />
)

export const NavigationIncompleted: Story = () => (
  <NavigationButtonComponent type="incompleted" selected />
)

export const Navigation: Story = () => (
  <NavigationComponent selectedPage="completed" />
)
