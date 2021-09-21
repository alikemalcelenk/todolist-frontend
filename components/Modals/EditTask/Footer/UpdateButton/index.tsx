import { FunctionComponent } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.css'

// elements
import Box from '../../../../Elements/box'
import Button from '../../../../Elements/button'
import Text from '../../../../Elements/text'

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
  return (
    <>
      {newTask &&
      task.description !== newTask.trim() &&
      newTask.trim() !== '' ? (
        <Button
          aria-label="update-modal"
          className={styles.updateButton}
          onClick={() => editTask({ taskId: task._id, description: newTask })}
        >
          <Text>Update</Text>
        </Button>
      ) : (
        <Box className={cn(styles.updateButton, styles.updateButtonSoft)}>
          <Text>Update</Text>
        </Box>
      )}
    </>
  )
}

export default UpdateButton
