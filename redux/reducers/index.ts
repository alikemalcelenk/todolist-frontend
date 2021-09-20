// types
import { TaskAction, TaskReducerState } from '../../config/types'

const initialState: TaskReducerState = {
  tasks: [],
  isLoadingGetTasks: false,
  isErrorGetTasks: false,
  isLoadingAddTask: false,
  isLoadingDeleteTask: false,
  isLoadingEditTask: false,
  isErrorAnyRequest: false
}

export const reducer = (
  state: TaskReducerState = initialState,
  action: TaskAction
): TaskReducerState => {
  let newTasks
  let taskIndex

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

    // DELETE_TASK
    case 'REQUEST_DELETE_TASK':
      return {
        ...state,
        isLoadingDeleteTask: true
      }

    case 'REQUEST_DELETE_TASK_SUCCESS':
      taskIndex = state.tasks.findIndex((task) => task._id! === action.taskId)
      newTasks = [...state.tasks]
      newTasks.splice(taskIndex, 1)

      return {
        ...state,
        tasks: newTasks,
        isLoadingDeleteTask: false
      }

    case 'REQUEST_DELETE_TASK_FAILED':
      return {
        ...state,
        isLoadingDeleteTask: false,
        isErrorAnyRequest: true
      }

    // EDIT TASK
    case 'REQUEST_EDIT_TASK':
      return {
        ...state,
        isLoadingEditTask: true
      }

    case 'REQUEST_EDIT_TASK_SUCCESS':
      taskIndex = state.tasks.findIndex((task) => task._id === action.taskId)
      newTasks = [...state.tasks]
      newTasks[taskIndex].description = action.description!

      return {
        ...state,
        tasks: newTasks,
        isLoadingEditTask: false
      }

    case 'REQUEST_EDIT_TASK_FAILED':
      return {
        ...state,
        isLoadingEditTask: false,
        isErrorAnyRequest: true
      }
  }
}
