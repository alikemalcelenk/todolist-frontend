import { FunctionComponent } from 'react'

// elements
import Box from '@elements/Box'
import Text from '@elements/Text'

// icons
import * as Icons from '@components/Icons'

// styles
import styles from './index.module.css'

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
