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
      <Icons.Wastebasket className={styles.wastebasketIcon} />
      <Text className={styles.title}>
        Are you sure you want to delete this task?
      </Text>
    </Box>
  )
}

export default Header
