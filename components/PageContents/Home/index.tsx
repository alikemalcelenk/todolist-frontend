import React, { FunctionComponent, useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { getTasks } from '../../../redux/actions'

// styles
import styles from './index.module.css'

// components
import AddTaskBar from '../../AddTaskBar'
import TaskCard from '../../TaskCard/index'

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
  getTasks: () => TasksType
}

const HomePageContent: FunctionComponent<HomePageContentType> = ({
  tasks,
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
      <AddTaskBar className={styles.addTaskBar} />

      <Box className={styles.listBox}>
        <Box
          className={
            size.width < env.MOBILE_WIDTH_SIZE
              ? styles.listInnerBoxMobile
              : styles.listInnerBox
          }
        >
          <Text className={styles.listTitle}>All Tasks</Text>
          {TaskCards}
        </Box>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state: TaskReducerStateType) => {
  return {
    tasks: state.tasks
  }
}

const mapActionsToProps = {
  getTasks
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomePageContent as any)
