import React, { useState, FunctionComponent, useRef, useEffect } from 'react'
import cn from 'classnames'

// redux
import { connect } from 'react-redux'
import { addTask } from '../../redux/actions'

// styles
import styles from './index.module.css'

// components
import AddTaskTextInput from './TextInput'
import AddTaskButton from './Button'

// elements
import Box from '../Elements/box'

// types
import { TaskReducerState as TaskReducerStateType } from '../../config/types'

type AddTaskBarContentType = {
  className?: string
  addTask: (task: any) => void
  isLoadingAddTask: boolean
}

const AddTaskBar: FunctionComponent<AddTaskBarContentType> = ({
  className,
  addTask,
  isLoadingAddTask
}) => {
  const [task, setTask] = useState<string>('')
  const onTaskChange = (event: any) => setTask(event.target.value)

  const didMount = useRef(false)

  // bunu ekleme sebebim sayfaya ilk girişte useEffectin çalışmasını istemiyorum. Sadece isLoadingAddTask update edildiğinde çalışsın.
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
      <AddTaskTextInput
        task={task}
        onTaskChange={onTaskChange}
        addTask={addTaskInner}
      />
      {task.trim() !== '' && (
        <AddTaskButton
          className={styles.addTaskButton}
          addTask={addTaskInner}
          isLoadingAddTask={isLoadingAddTask}
        />
      )}
    </Box>
  )
}

AddTaskBar.defaultProps = {
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

export default connect(mapStateToProps, mapActionsToProps)(AddTaskBar as any)
