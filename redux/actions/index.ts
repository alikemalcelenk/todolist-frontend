type GetTaskAction = {
  type: string
}

type AddTaskAction = {
  type: string
  description: string
}

type DeleteTaskAction = {
  type: string
  taskId: string
}

export const getTasks = (): GetTaskAction => {
  return { type: 'GET_TASKS' }
}

export const addTask = (action: any): AddTaskAction => {
  return { type: 'ADD_TASK', description: action.task }
}

export const deleteTask = (action: any): DeleteTaskAction => {
  return { type: 'DELETE_TASK', taskId: action.taskId }
}
