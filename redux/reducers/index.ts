// types
import {
  TaskAction as TaskActionType,
  TaskReducerState as TaskReducerStateType
} from '@config/types'

const initialState: TaskReducerStateType = {
  tasks: [],
  isLoadingGetTasks: false,
  isErrorGetTasks: false,
  isLoadingAddTask: false,
  isLoadingDeleteTask: false,
  isLoadingEditTask: false,
  isErrorAnyRequest: false
}

export const reducer = (
  state: TaskReducerStateType = initialState,
  action: TaskActionType
): TaskReducerStateType => {
  let newTasks
  let taskIndex

  switch (action.type) {
    // GET_TASKS
    case 'GET_TASKS_REQUEST':
      return { ...state, isLoadingGetTasks: true, isErrorGetTasks: false }

    case 'GET_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.tasks!,
        isLoadingGetTasks: false,
        isErrorGetTasks: false
      }

    case 'GET_TASKS_FAILURE':
      return { ...state, isLoadingGetTasks: false, isErrorGetTasks: true }

    // ADD_TASK
    case 'ADD_TASK_REQUEST':
      return { ...state, isLoadingAddTask: true }

    case 'ADD_TASK_SUCCESS':
      newTasks = [...state.tasks]
      newTasks.unshift(action.task!)

      return {
        ...state,
        tasks: newTasks,
        isLoadingAddTask: false
      }

    case 'ADD_TASK_FAILURE':
      return { ...state, isLoadingAddTask: false, isErrorAnyRequest: true }

    // DELETE_TASK
    case 'DELETE_TASK_REQUEST':
      return {
        ...state,
        isLoadingDeleteTask: true
      }

    case 'DELETE_TASK_SUCCESS':
      taskIndex = state.tasks.findIndex((task) => task._id! === action.taskId)
      newTasks = [...state.tasks]
      newTasks.splice(taskIndex, 1)

      return {
        ...state,
        tasks: newTasks,
        isLoadingDeleteTask: false
      }

    case 'DELETE_TASK_FAILURE':
      return {
        ...state,
        isLoadingDeleteTask: false,
        isErrorAnyRequest: true
      }

    // EDIT TASK
    case 'EDIT_TASK_REQUEST':
      return {
        ...state,
        isLoadingEditTask: true
      }

    case 'EDIT_TASK_SUCCESS':
      taskIndex = state.tasks.findIndex((task) => task._id === action.taskId)
      state.tasks[taskIndex].description = action.description! // eslint-disable-line no-param-reassign
      newTasks = [...state.tasks]

      return {
        ...state,
        tasks: newTasks,
        isLoadingEditTask: false
      }

    case 'EDIT_TASK_FAILURE':
      return {
        ...state,
        isLoadingEditTask: false,
        isErrorAnyRequest: true
      }

    // SWITCH_COMPLETION_OF_TASK
    case 'SWITCH_COMPLETION_OF_TASK_SUCCESS':
      taskIndex = state.tasks.findIndex((task) => task._id === action.taskId)
      newTasks = [...state.tasks]
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        isCompleted: !newTasks[taskIndex].isCompleted
      }

      return { ...state, tasks: newTasks }

    case 'SWITCH_COMPLETION_OF_TASK__FAILURE':
      return { ...state, isErrorAnyRequest: true }

    // SET_IS_ERROR_ANY_REQUEST
    case 'SET_IS_ERROR_ANY_REQUEST':
      return { ...state, isErrorAnyRequest: action.isErrorAnyRequest }

    default:
      return state
  }
}
