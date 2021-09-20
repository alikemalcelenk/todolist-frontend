import { FunctionComponent, useRef, useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { editTask } from '../../../../redux/actions'

// styles
import styles from './index.module.css'

// components
import UpdateButton from './UpdateButton'
import CancelButton from './CancelButton'
import Spinner from '../../../Spinner'

// elements
import Box from '../../../Elements/box'
// types
import {
  Task as TaskType,
  TaskReducerState as TaskReducerStateType
} from '../../../../config/types'

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
