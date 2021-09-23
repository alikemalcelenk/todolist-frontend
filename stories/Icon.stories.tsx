import { Story } from '@storybook/react'

// components - styled-system
import Box from '../components/Elements/Box'

// components - icons
import * as Icons from '../components/Icons'

export default {
  title: 'Icons'
}

export const Primary: Story = () => (
  <Box className="iconsBox">
    <Icons.Logo />
    <Icons.Plus />
    <Icons.CheckCircle />
    <Icons.Wastebasket />
    <Icons.Pen />
  </Box>
)
