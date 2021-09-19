import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// components
import CancelButton from './CancelButton/index'
import DeleteButton from './DeleteButton/index'

// elements
import Box from '../../../Elements/box'

// types
import { Task as TaskType } from '../../../../config/types'

type FooterContentType = {
  task: TaskType
  closeModal: () => void
}

const Footer: FunctionComponent<FooterContentType> = ({ task, closeModal }) => {
  return (
    <Box className={styles.root}>
      <CancelButton closeModal={closeModal} />
      <DeleteButton task={task} />
    </Box>
  )
}

export default Footer
