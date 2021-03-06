import React, { FunctionComponent, useEffect, useCallback } from 'react'

// redux
import { connect } from 'react-redux'
import { getTasks, switchCompletionOfTask } from '@redux/actions'
import { completedTaskSelector } from '@redux/selectors'

// components
import TaskCard from '@components/TaskCard'
import Spinner from '@components/Spinner'
import DeleteTaskModal from '@components/Modals/TaskDelete'
import EditTaskModal from '@components/Modals/TaskEdit'
import ErrorAlert from '@components/ErrorAlert'

// elements
import { Box, Text } from '@elements'

// hooks
import useWindowSize from '@hooks/useWindowSize'

// env
import env from '@config/env'

// types
import {
  Task as TaskType,
  Tasks as TasksType,
  TaskReducerState as TaskReducerStateType
} from '@config/types'

// styles
import styles from './index.module.css'

type CompletedPageContentType = {
  tasks: TasksType
  isLoadingGetTasks: boolean
  isErrorGetTasks: boolean
  isLoadingEditTask: boolean
  getTasks: () => TasksType
  switchCompletionOfTask: () => void
}

const CompletedPageContent: FunctionComponent<CompletedPageContentType> = ({
  tasks,
  isLoadingGetTasks,
  isLoadingEditTask,
  isErrorGetTasks,
  getTasks,
  switchCompletionOfTask
}) => {
  const size = useWindowSize()

  const [modalTask, setModalTask] = React.useState<TaskType>()
  const [isVisibleDeleteTaskModal, setIsVisibleDeleteTaskModal] = // Modal for deleteTask
    React.useState(false)
  const [isVisibleEditTaskModal, setIsVisibleEditTaskModal] = // Modal for editTask
    React.useState(false)

  useEffect(() => {
    // bu if kontrolünü yapma sebebim pageler arasında dolaşırken datalar çekilmişse bir daha fetch atmasını engellemek. Redux'da tutuyorum zaten.
    if (tasks instanceof Array && tasks.length === 0) {
      getTasks()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const openDeleteTaskModal = useCallback((data: any) => {
    setModalTask(data.task)
    setIsVisibleDeleteTaskModal(true)
  }, [])

  const closeDeleteTaskModal = () => {
    setIsVisibleDeleteTaskModal(false)
  }

  const openEditTaskModal = useCallback(
    (data: any) => {
      setModalTask(data.task)
      setIsVisibleEditTaskModal(true)
    },
    [isLoadingEditTask]
  )

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
        switchCompletionOfTask={switchCompletionOfTask}
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

      <ErrorAlert />

      <Box className={styles.listBox}>
        <Box
          className={
            size.width < env.MOBILE_WIDTH_SIZE
              ? styles.listInnerBoxMobile
              : styles.listInnerBox
          }
        >
          <Text className={styles.listTitle}>Completed Tasks</Text>

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
                      There are not any completed tasks in our records.
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
    tasks: completedTaskSelector(state.tasks),
    isLoadingGetTasks: state.isLoadingGetTasks,
    isErrorGetTasks: state.isErrorGetTasks,
    isLoadingEditTask: state.isLoadingEditTask
  }
}

const mapActionsToProps = {
  getTasks,
  switchCompletionOfTask
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CompletedPageContent as any)
