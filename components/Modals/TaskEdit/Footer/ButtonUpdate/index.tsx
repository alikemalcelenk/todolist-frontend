import { FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// elements
import Button from '../../../../Elements/Button'
import Text from '../../../../Elements/Text'

// types
import { Task as TaskType } from '../../../../../config/types'

type UpdateButtonContentType = {
  task: TaskType
  newTask: string
  editTask: (task: any) => void
}

const UpdateButton: FunctionComponent<UpdateButtonContentType> = ({
  task,
  newTask,
  editTask
}) => {
  const inputControl: boolean | '' =
    newTask && task.description !== newTask.trim() && newTask.trim() !== ''

  return (
    <>
      <Button
        aria-label="Edit in Modal"
        className={cn(
          styles.updateButton,
          !inputControl && styles.updateButtonSoft
        )}
        onClick={() => editTask({ taskId: task._id, description: newTask })}
        disabled={!inputControl}
      >
        <Text>Update</Text>
      </Button>
    </>
  )
}

export default UpdateButton
