import { FunctionComponent } from 'react'

// elements
import Button from '@elements/Button'
import Text from '@elements/Text'

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
      aria-label="Cancel in DeleteTaskModal"
    >
      <Text>Cancel</Text>
    </Button>
  )
}

export default CancelButton
