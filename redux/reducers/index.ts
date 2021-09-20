// types
import { TaskAction, TaskReducerState } from '../../config/types'

const initialState: TaskReducerState = {
  tasks: [],
  isLoadingGetTasks: false,
  isErrorGetTasks: false,
  isLoadingAddTask: false,
  isErrorAnyRequest: false
}

export const reducer = (
  state: TaskReducerState = initialState,
  action: TaskAction
): TaskReducerState => {
  let newTasks

  switch (action.type) {
    // GET_TASKS
    case 'REQUEST_GET_TASKS':
      return { ...state, isLoadingGetTasks: true, isErrorGetTasks: false }

    case 'REQUEST_GET_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.tasks!,
        isLoadingGetTasks: false,
        isErrorGetTasks: false
      }

    case 'REQUEST_GET_TASKS_FAILED':
      return { ...state, isLoadingGetTasks: false, isErrorGetTasks: true }

    default:
      return state

    // ADD_TASK
    case 'REQUEST_ADD_TASK':
      return { ...state, isLoadingAddTask: true }

    case 'REQUEST_ADD_TASK_SUCCESS':
      newTasks = [...state.tasks]
      newTasks.unshift(action.task!)

      return {
        ...state,
        tasks: newTasks,
        isLoadingAddTask: false
      }

    case 'REQUEST_ADD_TASK_FAILED':
      return { ...state, isLoadingAddTask: false, isErrorAnyRequest: true }
  }
}
