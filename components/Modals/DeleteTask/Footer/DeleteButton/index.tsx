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
}

const DeleteButton: FunctionComponent<DeleteButtonContentType> = ({ task }) => {
  return (
    <Button
      className={styles.deleteButton}
      onClick={() => console.log({ message: 'task was deleted', task })}
    >
      <Text>Delete</Text>
    </Button>
  )
}

export default DeleteButton
