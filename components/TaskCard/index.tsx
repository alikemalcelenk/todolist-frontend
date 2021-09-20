import { FunctionComponent, CSSProperties } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// components
import TimeCalculator from '../timeCalculator'

// elements
import Box from '../Elements/box'
import Text from '../Elements/text'
import Button from '../Elements/button'

// icons
import * as Icons from '../Icons'

// types
import { Task as TaskType } from '../../config/types'

// hooks
import useWindowSize from '../../hooks/useWindowSize'

// env
import env from '../../config/env'

type TaskCardContentType = {
  task: TaskType
  className?: string
  openDeleteTaskModal: (task: any) => void
  openEditTaskModal: (task: any) => void
  toggleIscompletedOfTask: (task: any) => void
}

const TaskCard: FunctionComponent<TaskCardContentType> = ({
  task,
  className,
  openDeleteTaskModal,
  openEditTaskModal,
  toggleIscompletedOfTask
}) => {
  const size = useWindowSize()

  // CSSProperties olarak belirtmem gerekiyor yoksa --textDecoration'ın type'ından dolayı hata veriyor
  const taskTestInnerStyle = {
    '--textDecoration': task.isCompleted
      ? 'line-through var(--c-green)'
      : 'none'
  } as CSSProperties

  const createdTime = TimeCalculator({ createdAt: task.created_at })

  return (
    <Box className={cn(styles.root, className)}>
      <Button
        className={styles.leftContent}
        onClick={() => {
          toggleIscompletedOfTask({
            taskId: task._id,
            isCompleted: task.isCompleted
          })
        }}
      >
        {task.isCompleted ? (
          <Icons.CheckCircle className={styles.checkCircleIcon} />
        ) : (
          <Box className={styles.emptyCheckBox} />
        )}
      </Button>

      <Box className={styles.midContent}>
        <Text className={styles.taskText} style={taskTestInnerStyle}>
          {task.description}
        </Text>

        {size.width < env.TABLET_WIDTH_SIZE && (
          <Text className={styles.dateText}>{createdTime}</Text>
        )}
      </Box>

      <Box className={styles.rightContent}>
        {size.width >= env.TABLET_WIDTH_SIZE && (
          <Text className={styles.dateText}>{createdTime}</Text>
        )}

        <Button
          className={styles.iconButton}
          onClick={() => openEditTaskModal({ task })}
        >
          <Icons.Pen className={styles.penIcon} />
        </Button>

        <Button
          className={styles.iconButton}
          onClick={() => openDeleteTaskModal({ task })}
        >
          <Icons.Wastebasket className={styles.wastebasketIcon} />
        </Button>
      </Box>
    </Box>
  )
}

TaskCard.defaultProps = {
  className: ''
}

export default TaskCard
