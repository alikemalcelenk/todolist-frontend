import { FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// components
import Spinner from '../../Spinner'

// elements
import Button from '../../Elements/Button'
import Box from '../../Elements/Box'

// icons
import * as Icons from '../../Icons'

type TaskBarButtonContentType = {
  className?: string
  addTask: () => void
  isLoadingAddTask: boolean
}

const TaskBarButton: FunctionComponent<TaskBarButtonContentType> = ({
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
        <Button
          aria-label="add-task"
          className={cn(styles.box, className)}
          onClick={addTask}
        >
          <Icons.Plus className={styles.icon} />
        </Button>
      )}
    </>
  )
}

TaskBarButton.defaultProps = {
  className: ''
}

export default TaskBarButton
