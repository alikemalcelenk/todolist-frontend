import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Input from '../../Elements/Input'

type TaskBarTextInputContentType = {
  task: string
  onTaskChange: (value: any) => void
  addTask: () => void
}

const TaskBarTextInput: FunctionComponent<TaskBarTextInputContentType> = ({
  task,
  onTaskChange,
  addTask,
  ...props
}) => {
  // klavye eventlerini dinliyor. User entera basarsa task eklenecek.
  const onKeyPress = (event: any) => {
    if (event.key === 'Enter' && task.trim() !== '') {
      addTask()
    }
  }

  return (
    <Input
      className={styles.input}
      type="text"
      placeholder="Add a new task..."
      value={task}
      onChange={onTaskChange}
      onKeyPress={onKeyPress}
      {...props}
    />
  )
}

export default TaskBarTextInput
