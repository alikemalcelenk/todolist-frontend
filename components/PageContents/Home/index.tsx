import React, { FunctionComponent, useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { getTasks } from '../../../redux/actions'

// styles
import styles from './index.module.css'

// components
import AddTaskBar from '../../AddTaskBar'
import TaskCard from '../../TaskCard/index'
import Spinner from '../../Spinner/index'

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

  const TaskCards =
    tasks instanceof Array &&
    tasks.map((task: TaskType) => (
      <TaskCard key={task._id} task={task} className={styles.taskCard} />
    ))

  useEffect(() => {
    getTasks()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
      {/*Type ‘{}’ is not assignable to type ‘IntrinsicAttributes &... hatasından kurtulamk için createElement ile oluşturdum */}
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
