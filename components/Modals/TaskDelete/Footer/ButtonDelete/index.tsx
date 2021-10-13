import { FunctionComponent } from 'react'

// elements
import Button from '@elements/Button'
import Text from '@elements/Text'

// types
import { Task as TaskType } from '@config/types'

// styles
import styles from './index.module.css'

type DeleteButtonContentType = {
  task: TaskType
  deleteTask: (taskId: any) => void
}

const DeleteButton: FunctionComponent<DeleteButtonContentType> = ({
  task,
  deleteTask
}) => {
  return (
    <Button
      aria-label="Delete in Modal"
      className={styles.deleteButton}
      onClick={() => deleteTask({ taskId: task._id })}
    >
      <Text>Delete</Text>
    </Button>
  )
}

export default DeleteButton
