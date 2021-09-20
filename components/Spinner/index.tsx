import { FunctionComponent } from 'react'
import Loader from 'react-loader-spinner'
import cn from 'classnames'

// style
import styles from './index.module.css'

// celements
import Box from '../Elements/box'

type SpinnerContentType = {
  className?: string
}

const Spinner: FunctionComponent<SpinnerContentType> = ({ className }) => {
  // Loader a css veremiyoum css için prop oluşturmamışlar. o yüzden inline olarak yazdım.
  return (
    <Box className={cn(styles.box, className)}>
      <Loader type="Oval" color="#F5F6F8" width={35} height={35} />
    </Box>
  )
}

Spinner.defaultProps = {
  className: ''
}

export default Spinner
