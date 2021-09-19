import React, { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// components
import TaskCard from '../../TaskCard/index'

// elements
import Box from '../../Elements/box'
import Text from '../../Elements/text'

// test data
import tasks from '../../../tasks'

// hooks
import useWindowSize from '../../../hooks/useWindowSize'

// env
import env from '../../../config/env'

const CompletedPageContent: FunctionComponent = () => {
  const size = useWindowSize()

  const TaskCards = tasks.map(
    (task) =>
      task.isCompleted && <TaskCard task={task} className={styles.taskCard} />
  )

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
      <Box className={styles.listBox}>
        <Box
          className={
            size.width < env.MOBILE_WIDTH_SIZE
              ? styles.listInnerBoxMobile
              : styles.listInnerBox
          }
        >
          <Text className={styles.listTitle}>Completed Tasks</Text>
          {TaskCards}
        </Box>
      </Box>
    </Box>
  )
}

export default CompletedPageContent
