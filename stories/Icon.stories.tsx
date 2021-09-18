import { Story } from '@storybook/react'

// components - styled-system
import Box from '../components/Elements/box'

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
