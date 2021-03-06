import { FunctionComponent, useRef, useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { deleteTask } from '@redux/actions'

// elements
import { Box } from '@elements'

// types
import {
  Task as TaskType,
  TaskReducerState as TaskReducerStateType
} from '@config/types'

// components
import Spinner from '@components/Spinner'
import ButtonCancel from './ButtonCancel'
import ButtonDelete from './ButtonDelete'

// styles
import styles from './index.module.css'

type FooterContentType = {
  task: TaskType
  closeModal: () => void
  isLoadingDeleteTask: false
  deleteTask: () => void
}

const Footer: FunctionComponent<FooterContentType> = ({
  task,
  closeModal,
  isLoadingDeleteTask,
  deleteTask
}) => {
  const didMount = useRef(false)
  // bunu ekleme sebebim sayfaya ilk girişte useEffectin çalışmasını istemiyorum. Sadece isLoadingDeleteTask update edildiğinde çalışsın.
  useEffect(() => {
    if (didMount.current && isLoadingDeleteTask === false) {
      closeModal()
    } else {
      didMount.current = true
    }
  }, [isLoadingDeleteTask]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box className={styles.root}>
      <ButtonCancel closeModal={closeModal} />

      {isLoadingDeleteTask ? (
        <Box className={styles.deleteButtonSpinnerBox}>
          <Spinner type="modal" />
        </Box>
      ) : (
        <ButtonDelete task={task} deleteTask={deleteTask} />
      )}
    </Box>
  )
}

const mapStateToProps = (state: TaskReducerStateType) => {
  return {
    isLoadingDeleteTask: state.isLoadingDeleteTask
  }
}

const mapActionsToProps = {
  deleteTask
}

export default connect(mapStateToProps, mapActionsToProps)(Footer as any)
