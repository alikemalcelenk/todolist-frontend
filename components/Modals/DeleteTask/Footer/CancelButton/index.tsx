import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Button from '../../../../Elements/Button'
import Text from '../../../../Elements/Text'

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
