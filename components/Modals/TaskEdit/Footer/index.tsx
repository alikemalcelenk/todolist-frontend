import { FunctionComponent, useRef, useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { editTask } from '@redux/actions'

// elements
import { Box } from '@elements'

// types
import {
  Task as TaskType,
  TaskReducerState as TaskReducerStateType
} from '@config/types'

// components
import Spinner from '@components/Spinner'
import UpdateButton from './ButtonUpdate'
import CancelButton from './ButtonCancel'

// styles
import styles from './index.module.css'

type FooterContentType = {
  task: TaskType
  newTask: string
  closeModal: () => void
  isLoadingEditTask: boolean
  editTask: (task: any) => void
}

const Footer: FunctionComponent<FooterContentType> = ({
  task,
  newTask,
  closeModal,
  isLoadingEditTask,
  editTask
}) => {
  const didMount = useRef(false)
  // bunu ekleme sebebim sayfaya ilk girişte useEffectin çalışmasını istemiyorum. Sadece isLoadingEditTask update edildiğinde çalışsın.
  useEffect(() => {
    if (didMount.current && isLoadingEditTask === false) {
      closeModal()
    } else {
      didMount.current = true
    }
  }, [isLoadingEditTask]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box className={styles.root}>
      <CancelButton closeModal={closeModal} />

      {isLoadingEditTask ? (
        <Box className={styles.updateBox}>
          <Spinner type="modal" />
        </Box>
      ) : (
        <UpdateButton task={task} newTask={newTask} editTask={editTask} />
      )}
    </Box>
  )
}

const mapStateToProps = (state: TaskReducerStateType) => {
  return {
    isLoadingEditTask: state.isLoadingEditTask
  }
}

const mapActionsToProps = {
  editTask
}

export default connect(mapStateToProps, mapActionsToProps)(Footer as any)
