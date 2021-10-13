// types
import {
  GetTaskActionReturn as GetTaskActionReturnType,
  AddTaskAction as AddTaskActionType,
  AddTaskActionReturn as AddTaskActionReturnType,
  DeleteTaskAction as DeleteTaskActionType,
  DeleteTaskActionReturn as DeleteTaskActionReturnType,
  EditTaskAction as EditTaskActionType,
  EditTaskActionReturn as EditTaskActionReturnType,
  SwitchCompletionOfTaskAction as SwitchCompletionOfTaskActionType,
  SwitchCompletionOfTaskActionReturn as SwitchCompletionOfTaskActionReturnType,
  SetIsErrorAnyRequestAction as SetIsErrorAnyRequestActionType,
  SetIsErrorAnyRequestActionReturn as SetIsErrorAnyRequestActionReturnType
} from '@config/types'

export const getTasks = (): GetTaskActionReturnType => {
  return { type: 'GET_TASKS' }
}

export const addTask = (action: AddTaskActionType): AddTaskActionReturnType => {
  return { type: 'ADD_TASK', description: action.task }
}

export const deleteTask = (
  action: DeleteTaskActionType
): DeleteTaskActionReturnType => {
  return { type: 'DELETE_TASK', taskId: action.taskId }
}

export const editTask = (
  action: EditTaskActionType
): EditTaskActionReturnType => {
  return {
    type: 'EDIT_TASK',
    taskId: action.taskId,
    description: action.description
  }
}

export const switchCompletionOfTask = (
  action: SwitchCompletionOfTaskActionType
): SwitchCompletionOfTaskActionReturnType => {
  return {
    type: 'SWITCH_COMPLETION_OF_TASK',
    taskId: action.taskId,
    isCompleted: action.isCompleted
  }
}

export const setIsErrorAnyRequest = (
  action: SetIsErrorAnyRequestActionType
): SetIsErrorAnyRequestActionReturnType => {
  return {
    type: 'SET_IS_ERROR_ANY_REQUEST',
    isErrorAnyRequest: action.isErrorAnyRequest
  }
}
