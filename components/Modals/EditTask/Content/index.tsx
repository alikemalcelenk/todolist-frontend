import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Box from '../../../Elements/box'
import Textarea from '../../../Elements/textarea'

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
