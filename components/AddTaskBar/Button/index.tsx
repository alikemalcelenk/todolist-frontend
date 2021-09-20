import { FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// components
import Spinner from '../../Spinner/index'

// elements
import Button from '../../Elements/button'
import Box from '../../Elements/box'

// icons
import * as Icons from '../../Icons'

type AddTaskBarButtonContentType = {
  className?: string
  addTask: () => void
  isLoadingAddTask: boolean
}

const AddTaskBarButton: FunctionComponent<AddTaskBarButtonContentType> = ({
  className,
  addTask,
  isLoadingAddTask
}) => {
  return (
    <>
      {isLoadingAddTask ? (
        <Box className={cn(styles.box, className)} onClick={addTask}>
          <Spinner type="bar" />
        </Box>
      ) : (
        <Button className={cn(styles.box, className)} onClick={addTask}>
          <Icons.Plus className={styles.icon} />
        </Button>
      )}
    </>
  )
}

AddTaskBarButton.defaultProps = {
  className: ''
}

export default AddTaskBarButton
