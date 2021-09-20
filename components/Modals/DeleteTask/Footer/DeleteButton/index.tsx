import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Button from '../../../../Elements/button'
import Text from '../../../../Elements/text'

// types
import { Task as TaskType } from '../../../../../config/types'

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
      className={styles.deleteButton}
      onClick={() => deleteTask({ taskId: task._id })}
    >
      <Text>Delete</Text>
    </Button>
  )
}

export default DeleteButton
