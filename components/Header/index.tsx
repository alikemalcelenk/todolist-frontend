import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// components
import Logo from '../Logo/index'
import Navigation from '../Navigation/index'

// elements
import Box from '../Elements/box'

// hooks
import useWindowSize from '../../hooks/useWindowSize'

// env
import env from '../../config/env'

type HeaderContentType = {
  selectedPage: string
}

const Header: FunctionComponent<HeaderContentType> = ({ selectedPage }) => {
  const size = useWindowSize()

  return (
    <Box
      className={styles.root}
      style={{
        '--root-padding':
          size.width < env.MOBILE_WIDTH_SIZE
            ? '0px 10px 0px 10px'
            : '0px 40px 0px 40px'
      }}
    >
      <Logo />
      <Navigation selectedPage={selectedPage} />
    </Box>
  )
}

export default Header
