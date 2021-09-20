import React, { FunctionComponent, useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { getTasks } from '../../../redux/actions'

// styles
import styles from './index.module.css'

// components
import AddTaskBar from '../../AddTaskBar'
import TaskCard from '../../TaskCard'
import Spinner from '../../Spinner'
import DeleteTaskModal from '../../Modals/DeleteTask'
import EditTaskModal from '../../Modals/EditTask'

// elements
import Box from '../../Elements/box'
import Text from '../../Elements/text'

// hooks
import useWindowSize from '../../../hooks/useWindowSize'

// env
import env from '../../../config/env'

// types
import {
  Task as TaskType,
  Tasks as TasksType,
  TaskReducerState as TaskReducerStateType
} from '../../../config/types'

type HomePageContentType = {
  tasks: TasksType
  isLoadingGetTasks: boolean
  isErrorGetTasks: boolean
  getTasks: () => TasksType
}

const HomePageContent: FunctionComponent<HomePageContentType> = ({
  tasks,
  isLoadingGetTasks,
  isErrorGetTasks,
  getTasks
}) => {
  const size = useWindowSize()

  const [modalTask, setModalTask] = React.useState<TaskType>()
  const [isVisibleDeleteTaskModal, setIsVisibleDeleteTaskModal] = // Modal for deleteTask
    React.useState(false)
  const [isVisibleEditTaskModal, setIsVisibleEditTaskModal] = // Modal for editTask
    React.useState(false)

  useEffect(() => {
    getTasks()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const openDeleteTaskModal = (task: any) => {
    setModalTask(task)
    setIsVisibleDeleteTaskModal(true)
  }

  const closeDeleteTaskModal = () => {
    setIsVisibleDeleteTaskModal(false)
  }

  const openEditTaskModal = (data: any) => {
    setModalTask(data.task)
    setIsVisibleEditTaskModal(true)
  }

  const closeEditTaskModal = () => {
    setIsVisibleEditTaskModal(false)
  }

  const TaskCards =
    tasks instanceof Array &&
    tasks.map((task: TaskType) => (
      <TaskCard
        key={task._id}
        task={task}
        className={styles.taskCard}
        openDeleteTaskModal={openDeleteTaskModal}
        openEditTaskModal={openEditTaskModal}
      />
    ))

  return (
    <Box
      className={styles.root}
      style={{
        '--root-padding':
          size.width < env.MOBILE_WIDTH_SIZE
            ? '0px 10px 0px 10px'
            : '0px 40px 0px 40px'
      }}
    >
      <DeleteTaskModal
        task={modalTask!}
        isVisible={isVisibleDeleteTaskModal}
        closeModal={closeDeleteTaskModal}
      />

      <EditTaskModal
        task={modalTask!}
        isVisible={isVisibleEditTaskModal}
        closeModal={closeEditTaskModal}
      />

      {/* Type ‘{}’ is not assignable to type ‘IntrinsicAttributes &... hatasından kurtulamk için createElement ile oluşturdum */}
      {React.createElement(AddTaskBar, { className: styles.addTaskBar })}

      <Box className={styles.listBox}>
        <Box
          className={
            size.width < env.MOBILE_WIDTH_SIZE
              ? styles.listInnerBoxMobile
              : styles.listInnerBox
          }
        >
          <Text className={styles.listTitle}>All Tasks</Text>

          {isLoadingGetTasks ? (
            <Spinner type="content" />
          ) : (
            <>
              {isErrorGetTasks ? (
                <Text className={styles.warnText}>
                  While fetching the tasks, an error occurred. Please try again.
                </Text>
              ) : (
                <>
                  {tasks instanceof Array && tasks.length === 0 ? (
                    <Text className={styles.warnText}>
                      There are not any tasks in our records. Please add a new
                      task.
                    </Text>
                  ) : (
                    TaskCards
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state: TaskReducerStateType) => {
  return {
    tasks: state.tasks,
    isLoadingGetTasks: state.isLoadingGetTasks,
    isErrorGetTasks: state.isErrorGetTasks
  }
}

const mapActionsToProps = {
  getTasks
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomePageContent as any)
