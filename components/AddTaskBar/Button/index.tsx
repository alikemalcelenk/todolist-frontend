import { FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// elements
import Button from '../../Elements/button'

// icons
import * as Icons from '../../Icons'

type AddTaskBarButtonContentType = {
  className?: string
  addTask: () => void
}

const AddTaskBarButton: FunctionComponent<AddTaskBarButtonContentType> = ({
  className,
  addTask
}) => {
  return (
    <Button className={cn(styles.box, className)} onClick={addTask}>
      <Icons.Plus className={styles.icon} />
    </Button>
  )
}

AddTaskBarButton.defaultProps = {
  className: ''
}

export default AddTaskBarButton
