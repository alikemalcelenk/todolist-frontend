import { FunctionComponent } from 'react'

// elements
import Box from '@elements/Box'
import Text from '@elements/Text'

// styles
import styles from './index.module.css'

const Footer: FunctionComponent = () => {
  return (
    <Box className={styles.root}>
      <Text>Todolist @2021</Text>
    </Box>
  )
}

export default Footer
