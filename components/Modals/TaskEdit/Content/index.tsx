import { FunctionComponent } from 'react'

// elements
import Box from '@elements/Box'
import Textarea from '@elements/Textarea'

// styles
import styles from './index.module.css'

type ContentPageContentType = {
  newTask: string
  onTaskChange: (value: any) => void
}

const Content: FunctionComponent<ContentPageContentType> = ({
  newTask,
  onTaskChange
}) => {
  return (
    <>
      <Box className={styles.line} />
      <Box className={styles.root}>
        <Textarea
          className={styles.input}
          rows={5}
          maxLength={600}
          placeholder="Edit task..."
          value={newTask}
          onChange={onTaskChange}
        />
      </Box>
      <Box className={styles.line} />
    </>
  )
}

export default Content
