import { FunctionComponent, useRef, useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { deleteTask } from '../../../../redux/actions'

// styles
import styles from './index.module.css'

// components
import CancelButton from './CancelButton/index'
import DeleteButton from './DeleteButton/index'
import Spinner from '../../../Spinner/index'

// elements
import Box from '../../../Elements/box'

// types
import {
  Task as TaskType,
  Tasks as TasksType,
  TaskReducerState as TaskReducerStateType
} from '../../../../config/types'

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
  //bunu ekleme sebebim sayfaya ilk girişte useEffectin çalışmasını istemiyorum. Sadece isLoadingDeleteTask update edildiğinde çalışsın.
  useEffect(() => {
    if (didMount.current && isLoadingDeleteTask === false) {
      closeModal()
    } else {
      didMount.current = true
    }
  }, [isLoadingDeleteTask])

  return (
    <Box className={styles.root}>
      <CancelButton closeModal={closeModal} />

      {isLoadingDeleteTask ? (
        <Box className={styles.deleteButtonSpinnerBox}>
          <Spinner type="modal" />
        </Box>
      ) : (
        <DeleteButton task={task} deleteTask={deleteTask} />
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
