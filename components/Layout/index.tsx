import { FunctionComponent } from 'react'

// elements
import { Box } from '@elements'

// styles
import styles from './index.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return <Box className={styles.layout}>{children}</Box>
}

export default Layout
