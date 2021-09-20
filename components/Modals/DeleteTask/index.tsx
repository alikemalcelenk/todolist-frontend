import { FunctionComponent, createElement } from 'react'
import Modal from 'react-modal'

// styles
import styles from './index.module.css'

// components
import Header from './Header/index'
import Content from './Content/index'
import Footer from './Footer/index'

// elements
import Box from '../../Elements/box'

// types
import { Task as TaskType } from '../../../config/types'

type DeleteTaskModalContentType = {
  task: TaskType
  isVisible: boolean
  closeModal: () => void
}

const DeleteTaskModal: FunctionComponent<DeleteTaskModalContentType> = ({
  task,
  isVisible,
  closeModal
}) => {
  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <Box className={styles.root}>
        <Header />
        <Content task={task} />
        {/* Type ‘{}’ is not assignable to type ‘IntrinsicAttributes &... hatasından kurtulamk için createElement ile oluşturdum */}
        {createElement(Footer, { task, closeModal })}
      </Box>
    </Modal>
  )
}

export default DeleteTaskModal
