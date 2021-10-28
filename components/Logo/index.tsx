import { FunctionComponent } from 'react'
import Link from 'next/link'

// elements
import { Box, Text } from '@elements'

// icons
import * as Icons from '../Icons'

// styles
import styles from './index.module.css'

const Logo: FunctionComponent = () => {
  return (
    <Link href="/" passHref>
      <Box className={styles.box}>
        <Icons.Logo className={styles.icon} title="Logo" />
        <Text className={styles.name}>Todolist</Text>
      </Box>
    </Link>
  )
}

export default Logo
