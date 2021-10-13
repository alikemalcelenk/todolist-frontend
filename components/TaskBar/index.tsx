import React, { useState, FunctionComponent, useRef, useEffect } from 'react'
import cn from 'classnames'

// redux
import { connect } from 'react-redux'
import { addTask } from '@redux/actions'

// styles
import styles from './index.module.css'

// components
import TaskBarTextInput from './TextInput'
import TaskBarButton from './Button'

// elements
import Box from '../Elements/Box'

// types
import { TaskReducerState as TaskReducerStateType } from '../../config/types'

type TaskBarContentType = {
  className?: string
  addTask: (task: any) => void
  isLoadingAddTask: boolean
}

const TaskBar: FunctionComponent<TaskBarContentType> = ({
  className,
  addTask,
  isLoadingAddTask
}) => {
  const [task, setTask] = useState<string>('')
  const onTaskChange = (event: any) => setTask(event.target.value)

  const didMount = useRef(false) // bunu ekleme sebebim sayfaya ilk girişte useEffectin çalışmasını istemiyorum. Sadece isLoadingAddTask update edildiğinde çalışsın.

  useEffect(() => {
    if (didMount.current && isLoadingAddTask === false) {
      setTask('')
    } else {
      didMount.current = true
    }
  }, [isLoadingAddTask])

  const addTaskInner = () => {
    if (!isLoadingAddTask) {
      // task eklenirken(spinner dönerken) post atılmasını engellemek için ekledim.
      addTask({ task: task.trim() })
    }
  }

  return (
    <Box className={cn(styles.root, className)}>
      <TaskBarTextInput
        task={task}
        onTaskChange={onTaskChange}
        addTask={addTaskInner}
      />
      {task.trim() !== '' && (
        <TaskBarButton
          className={styles.taskBarButton}
          addTask={addTaskInner}
          isLoadingAddTask={isLoadingAddTask}
        />
      )}
    </Box>
  )
}

TaskBar.defaultProps = {
  className: ''
}

const mapStateToProps = (state: TaskReducerStateType) => {
  return {
    isLoadingAddTask: state.isLoadingAddTask
  }
}

const mapActionsToProps = {
  addTask
}

export default connect(mapStateToProps, mapActionsToProps)(TaskBar as any)
