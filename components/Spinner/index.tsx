import { FunctionComponent } from 'react'
import Loader from 'react-loader-spinner'
import cn from 'classnames'

// style
import styles from './index.module.css'

// celements
import Box from '../Elements/box'

type SpinnerContentType = {
  className?: string
  type: string
}

const Spinner: FunctionComponent<SpinnerContentType> = ({
  className,
  type
}) => {
  // Loader a css veremiyoum css için prop oluşturmamışlar. o yüzden inline olarak yazdım.
  return (
    <Box className={cn(styles.box, className)} data-testid="spinner">
      <Loader
        type="Oval"
        color="#F5F6F8"
        width={
          type === 'content'
            ? 35
            : type === 'bar'
            ? 15
            : type === 'modal'
            ? 10
            : 12
        }
        height={
          type === 'content'
            ? 35
            : type === 'bar'
            ? 15
            : type === 'modal'
            ? 10
            : 12
        }
      />
    </Box>
  )
}

Spinner.defaultProps = {
  className: ''
}

export default Spinner
