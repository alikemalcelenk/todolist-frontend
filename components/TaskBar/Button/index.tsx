import { FunctionComponent } from 'react'
import cn from 'classnames'

// components
import Spinner from '@components/Spinner'

// elements
import { Box, Button } from '@elements'

// icons
import * as Icons from '@components/Icons'

// styles
import styles from './index.module.css'

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
          aria-label="Add Task"
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
