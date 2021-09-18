import { FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// elements
import Box from '../../Elements/box'
import Text from '../../Elements/text'

type NavigationButtonContentType = {
  type: string
  selected?: boolean
}

const NavigationButton: FunctionComponent<NavigationButtonContentType> = ({
  type,
  selected
}) => {
  return (
    <Box className={styles.box}>
      <Text className={cn(styles.text, selected && styles.selectedButtonText)}>
        {type === 'completed'
          ? 'Completed'
          : type === 'incompleted' && 'Incompleted'}
      </Text>
    </Box>
  )
}

NavigationButton.defaultProps = {
  selected: false
}

export default NavigationButton
