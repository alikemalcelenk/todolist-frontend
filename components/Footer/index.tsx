import { FunctionComponent } from 'react'

// elements
import { Box, Text } from '@elements'

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
