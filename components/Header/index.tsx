import { FunctionComponent } from 'react'

// components
import Logo from '@components/Logo'
import Navigation from '@components/Navigation'

// elements
import { Box } from '@elements'

// hooks
import useWindowSize from '@hooks/useWindowSize'

// env
import env from '@config/env'

// styles
import styles from './index.module.css'

type HeaderContentType = {
  selectedPage: string
}

const Header: FunctionComponent<HeaderContentType> = ({ selectedPage }) => {
  const size = useWindowSize()

  return (
    <Box
      title="Header"
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
