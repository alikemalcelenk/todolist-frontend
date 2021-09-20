type GetTaskAction = {
  type: string
}

type AddTaskAction = {
  type: string
  description: string
}

export const getTasks = (): GetTaskAction => {
  return { type: 'GET_TASKS' }
}

export const addTask = (action: any): AddTaskAction => {
  return { type: 'ADD_TASK', description: action.task }
}
