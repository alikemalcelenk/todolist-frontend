import { FunctionComponent } from 'react'

// elements
import { Box, Text } from '@elements'

// icons
import * as Icons from '@components/Icons'

// styles
import styles from './index.module.css'

const Header: FunctionComponent = () => {
  return (
    <Box className={styles.root}>
      <Icons.Pen className={styles.penIcon} />
      <Text className={styles.title}>Edit Task</Text>
    </Box>
  )
}

export default Header
