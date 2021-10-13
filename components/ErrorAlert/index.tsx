import { useEffect, FunctionComponent } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// redux
import { connect } from 'react-redux'
import { setIsErrorAnyRequest } from '@redux/actions'

// types
import { TaskReducerState as TaskReducerStateType } from '@config/types'

type ErrorAlertContentType = {
  isErrorAnyRequest: boolean
  setIsErrorAnyRequest: (isErrorAnyRequest: any) => void
}

const ErrorAlert: FunctionComponent<ErrorAlertContentType> = ({
  isErrorAnyRequest,
  setIsErrorAnyRequest
}) => {
  useEffect(() => {
    if (isErrorAnyRequest) {
      toast.error(
        '⚠️ While processing the data, an error occurred. Please try again.',
        {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        }
      )
      setIsErrorAnyRequest({ isErrorAnyRequest: false })
    }
  }, [isErrorAnyRequest]) // eslint-disable-line react-hooks/exhaustive-deps

  return <ToastContainer />
}

const mapStateToProps = (state: TaskReducerStateType) => {
  return {
    isErrorAnyRequest: state.isErrorAnyRequest
  }
}

const mapActionsToProps = {
  setIsErrorAnyRequest
}

export default connect(mapStateToProps, mapActionsToProps)(ErrorAlert as any)
