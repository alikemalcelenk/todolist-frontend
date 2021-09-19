import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Box from '../Elements/box'

const Layout: FunctionComponent = ({ children }) => {
  return <Box className={styles.layout}>{children}</Box>
}

export default Layout
