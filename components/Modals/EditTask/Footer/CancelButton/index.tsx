import { FunctionComponent } from 'react'

// styles
import styles from './index.module.css'

// elements
import Button from '../../../../Elements/button'
import Text from '../../../../Elements/text'

type CancelButtonContentType = {
  closeModal: () => void
}

const CancelButton: FunctionComponent<CancelButtonContentType> = ({
  closeModal
}) => {
  return (
    <Button className={styles.cancelButton} onClick={closeModal}>
      <Text>Cancel</Text>
    </Button>
  )
}

export default CancelButton
