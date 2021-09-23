import { FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// components
import NavigationButton from './Button'

// elements
import Box from '../Elements/Box'

type NavigationContentType = {
  className?: string
  selectedPage: string
}

const Navigation: FunctionComponent<NavigationContentType> = ({
  className,
  selectedPage
}) => {
  return (
    <Box className={cn(styles.box, className)}>
      <NavigationButton
        type="completed"
        selected={selectedPage === 'completed'}
      />
      <NavigationButton
        type="incompleted"
        selected={selectedPage === 'incompleted'}
      />
    </Box>
  )
}

Navigation.defaultProps = {
  className: ''
}

export default Navigation
