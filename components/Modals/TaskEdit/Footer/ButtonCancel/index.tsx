import { FunctionComponent } from 'react'

// elements
import { Button, Text } from '@elements'

// styles
import styles from './index.module.css'

type CancelButtonContentType = {
  closeModal: () => void
}

const CancelButton: FunctionComponent<CancelButtonContentType> = ({
  closeModal
}) => {
  return (
    <Button
      className={styles.cancelButton}
      onClick={closeModal}
      aria-label="Cancel in EditTaskModal"
    >
      <Text>Cancel</Text>
    </Button>
  )
}

export default CancelButton
