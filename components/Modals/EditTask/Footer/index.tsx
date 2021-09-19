import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// components
import UpdateButton from './UpdateButton/index'
import CancelButton from './CancelButton/index'

// elements
import Box from '../../../Elements/box'

// types
import { Task as TaskType } from '../../../../config/types'

type FooterContentType = {
  task: TaskType
  newTask: string
  closeModal: () => void
}

const Footer: FunctionComponent<FooterContentType> = ({
  task,
  newTask,
  closeModal
}) => {
  return (
    <Box className={styles.root}>
      <CancelButton closeModal={closeModal} />
      <UpdateButton task={task} newTask={newTask} />
    </Box>
  )
}

export default Footer
