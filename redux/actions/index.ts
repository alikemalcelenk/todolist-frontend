// types
import {
  GetTaskAction as GetTaskActionType,
  AddTaskAction as AddTaskActionType,
  DeleteTaskAction as DeleteTaskActionType,
  EditTaskAction as EditTaskActionType,
  ToggleIscompletedOfTaskAction as ToggleIscompletedOfTaskActionType,
  SetIsErrorAnyRequestAction as SetIsErrorAnyRequestActionType
} from '../../config/types'

export const getTasks = (): GetTaskActionType => {
  return { type: 'GET_TASKS' }
}

export const addTask = (action: any): AddTaskActionType => {
  return { type: 'ADD_TASK', description: action.task }
}

export const deleteTask = (action: any): DeleteTaskActionType => {
  return { type: 'DELETE_TASK', taskId: action.taskId }
}

export const editTask = (action: any): EditTaskActionType => {
  return {
    type: 'EDIT_TASK',
    taskId: action.taskId,
    description: action.description
  }
}

export const toggleIscompletedOfTask = (
  action: any
): ToggleIscompletedOfTaskActionType => {
  return {
    type: 'TOGGLE_ISCOMPLETED_OF_TASK',
    taskId: action.taskId,
    isCompleted: action.isCompleted
  }
}

export const setIsErrorAnyRequest = (
  action: any
): SetIsErrorAnyRequestActionType => {
  return {
    type: 'SET_IS_ERROR_ANY_REQUEST',
    isErrorAnyRequest: action.isErrorAnyRequest
  }
}
