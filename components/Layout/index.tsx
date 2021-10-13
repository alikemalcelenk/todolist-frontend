import { FunctionComponent } from 'react'

// elements
import Box from '@elements/Box'

// styles
import styles from './index.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return <Box className={styles.layout}>{children}</Box>
}

export default Layout
