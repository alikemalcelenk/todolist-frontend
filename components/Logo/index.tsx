import { FunctionComponent } from 'react'
import Link from 'next/link'

// styles
import styles from './index.module.css'

// elements
import Box from '../Elements/Box'
import Text from '../Elements/Text'

// icons
import * as Icons from '../Icons'

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
