import { FunctionComponent } from 'react'
import cn from 'classnames'

// elements
import { Box } from '@elements'

// styles
import styles from './index.module.css'

// components
import NavigationButton from './Button'

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
