import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Box from '../../../Elements/Box'
import Text from '../../../Elements/Text'

// types
import { Task as TaskType } from '../../../../config/types'

type ContentPageContentType = {
  task: TaskType
}

const Content: FunctionComponent<ContentPageContentType> = ({ task }) => {
  return (
    <>
      <Box className={styles.line} />
      <Box className={styles.root}>
        <Text className={styles.description}>
          Task to delete:{' '}
          <Text className={styles.descriptionTaskName}>{task.description}</Text>
        </Text>
      </Box>
      <Box className={styles.line} />
    </>
  )
}

export default Content
