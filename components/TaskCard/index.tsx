import { useState, FunctionComponent, CSSProperties } from 'react'
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

type TaskCardContentType = {
  task: TaskType
  className?: string
}

const TaskCard: FunctionComponent<TaskCardContentType> = ({
  task,
  className
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted)

  const deleteTask = () => {
    console.log('Task is deleted')
  }

  const editTask = () => {
    console.log('Task is edited')
  }

  const toogleIsCompleted = () => {
    setIsCompleted(!isCompleted)
  }

  // CSSProperties olarak belirtmem gerekiyor yoksa --textDecoration'ın type'ından dolayı hata veriyor
  const taskTestInnerStyle = {
    '--textDecoration': isCompleted ? 'line-through var(--c-green)' : 'none'
  } as CSSProperties

  const createdTime = TimeCalculator({ createdAt: task.created_at })

  return (
    <Box className={cn(styles.root, className)}>
      <Button
        className={styles.leftContent}
        onClick={() => {
          toogleIsCompleted()
        }}
      >
        {isCompleted ? (
          <Icons.CheckCircle className={styles.checkCircleIcon} />
        ) : (
          <Box className={styles.emptyCheckBox} />
        )}
      </Button>

      <Box className={styles.midContent}>
        <Text className={styles.taskText} style={taskTestInnerStyle}>
          {task.description}
        </Text>
      </Box>

      <Box className={styles.rightContent}>
        <Text className={styles.dateText}>{createdTime}</Text>

        <Button className={styles.iconButton} onClick={editTask}>
          <Icons.Pen className={styles.penIcon} />
        </Button>

        <Button className={styles.iconButton} onClick={deleteTask}>
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
