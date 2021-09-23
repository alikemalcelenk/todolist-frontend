import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Box from '../../../Elements/Box'
import Text from '../../../Elements/Text'

// icons
import * as Icons from '../../../Icons'

const Header: FunctionComponent = () => {
  return (
    <Box className={styles.root}>
      <Icons.Pen className={styles.penIcon} />
      <Text className={styles.title}>Edit Task</Text>
    </Box>
  )
}

export default Header
