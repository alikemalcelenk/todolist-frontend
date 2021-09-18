import React, { useState, FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// components
import AddTaskTextInput from './TextInput'
import AddTaskButton from './Button'

// elements
import Box from '../Elements/box'

type AddTaskBarContentType = {
  className?: string
}

const AddTaskBar: FunctionComponent<AddTaskBarContentType> = ({
  className
}) => {
  const [task, setTask] = useState<string>('')
  const onTaskChange = (event: any) => setTask(event.target.value)

  const addTask = () => {
    setTask('')
  }

  return (
    <Box className={cn(styles.root, className)}>
      <AddTaskTextInput
        task={task}
        onTaskChange={onTaskChange}
        addTask={addTask}
      />
      {task.trim() !== '' && (
        <AddTaskButton className={styles.addTaskButton} addTask={addTask} />
      )}
    </Box>
  )
}

AddTaskBar.defaultProps = {
  className: ''
}

export default AddTaskBar
