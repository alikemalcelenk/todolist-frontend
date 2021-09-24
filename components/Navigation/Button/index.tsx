import { FunctionComponent } from 'react'
import cn from 'classnames'
import Link from 'next/link'

// styles
import styles from './index.module.css'

// elements
import Box from '../../Elements/Box'
import Text from '../../Elements/Text'

// hooks
import useWindowSize from '../../../hooks/useWindowSize'

// env
import env from '../../../config/env'

type NavigationButtonContentType = {
  type: string
  selected?: boolean
}

const NavigationButton: FunctionComponent<NavigationButtonContentType> = ({
  type,
  selected
}) => {
  const size = useWindowSize()

  const href = type === 'completed' ? '/completed' : '/incompleted'

  return (
    <Link href={href} passHref>
      <Box
        className={
          size.width < env.MOBILE_WIDTH_SIZE ? styles.boxMobile : styles.box
        }
        data-testid="navigation-button"
      >
        <Text
          className={cn(styles.text, selected && styles.selectedButtonText)}
        >
          {type === 'completed'
            ? 'Completed'
            : type === 'incompleted' && 'Incompleted'}
        </Text>
      </Box>
    </Link>
  )
}

NavigationButton.defaultProps = {
  selected: false
}

export default NavigationButton
