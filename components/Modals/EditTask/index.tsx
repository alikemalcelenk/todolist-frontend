import { useEffect, useState, FunctionComponent, createElement } from 'react'
import Modal from 'react-modal'

// styles
import styles from './index.module.css'

// components
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

// elements
import Box from '../../Elements/box'

// types
import { Task as TaskType } from '../../../config/types'

type EditTaskModalContentType = {
  task: TaskType
  isVisible: boolean
  closeModal: () => void
}

const EditTaskModal: FunctionComponent<EditTaskModalContentType> = ({
  task,
  isVisible,
  closeModal
}) => {
  const [newTask, setNewTask] = useState('')
  const onTaskChange = (event: any): void => setNewTask(event.target.value)

  useEffect(() => {
    if (task) {
      setNewTask(task.description)
    }
  }, [task])

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
        <Content newTask={newTask} onTaskChange={onTaskChange} />
        {/* Type ‘{}’ is not assignable to type ‘IntrinsicAttributes &... hatasından kurtulamk için createElement ile oluşturdum */}
        {createElement(Footer, { task, newTask, closeModal })}
      </Box>
    </Modal>
  )
}

export default EditTaskModal
