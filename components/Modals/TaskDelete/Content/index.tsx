import { FunctionComponent } from 'react'

// elements
import Box from '@elements/Box'
import Text from '@elements/Text'

// types
import { Task as TaskType } from '@config/types'

// styles
import styles from './index.module.css'

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
