// types
import { TaskAction, TaskReducerState } from '../../config/types'

const initialState: TaskReducerState = {
  tasks: [],
  isLoadingGetTasks: false,
  isErrorGetTasks: false
}

export const reducer = (
  state: TaskReducerState = initialState,
  action: TaskAction
): TaskReducerState => {
  switch (action.type) {
    // GET_TASKS
    case 'REQUEST_GET_TASKS':
      return { ...state, isLoadingGetTasks: true, isErrorGetTasks: false }

    case 'REQUEST_GET_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.tasks,
        isLoadingGetTasks: false,
        isErrorGetTasks: false
      }

    case 'REQUEST_GET_TASKS_FAILED':
      return { ...state, isLoadingGetTasks: false, isErrorGetTasks: true }

    default:
      return state
  }
}
