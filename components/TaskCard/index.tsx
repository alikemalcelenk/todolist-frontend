import React, { FunctionComponent, CSSProperties } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// components
import TimeCalculator from '../TimeCalculator'

// elements
import Box from '../Elements/Box'
import Text from '../Elements/Text'
import Button from '../Elements/Button'

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
        aria-label="Switch Case"
        className={styles.leftContent}
        onClick={() => {
          toggleIscompletedOfTask({
            taskId: task._id,
            isCompleted: task.isCompleted
          })
        }}
      >
        {task.isCompleted ? (
          <Box
            className={styles.checkCircleIcon}
            data-testid="taskcard-checkCircle"
          >
            <Icons.CheckCircle className={styles.checkCircleIcon} />
          </Box>
        ) : (
          <Box
            className={styles.emptyCheckBox}
            data-testid="taskcard-emptyCircle"
          />
        )}
      </Button>

      <Box className={styles.midContent}>
        <Text
          className={styles.taskText}
          style={taskTestInnerStyle}
          data-testid="taskcard-description"
        >
          {task.description}
        </Text>

        {size.width < env.TABLET_WIDTH_SIZE && (
          <Text className={styles.dateText} data-testid="taskcard-time">
            {createdTime}
          </Text>
        )}
      </Box>

      <Box className={styles.rightContent}>
        {size.width >= env.TABLET_WIDTH_SIZE && (
          <Text className={styles.dateText} data-testid="taskcard-time">
            {createdTime}
          </Text>
        )}

        <Button
          aria-label="Edit"
          className={styles.iconButton}
          onClick={() => openEditTaskModal({ task })}
        >
          <Icons.Pen className={styles.penIcon} />
        </Button>

        <Button
          aria-label="Delete"
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

export default React.memo(TaskCard)
