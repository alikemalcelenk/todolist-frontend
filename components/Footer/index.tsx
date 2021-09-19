import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Box from '../Elements/box'
import Text from '../Elements/text'

const Footer: FunctionComponent = () => {
  return (
    <Box className={styles.root}>
      <Text>Todolist @2021</Text>
    </Box>
  )
}

export default Footer
