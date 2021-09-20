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

type EditTaskAction = {
  type: string
  taskId: string
  description: string
}

type ToggleIscompletedOfTaskAction = {
  type: string
  taskId: string
  isCompleted: boolean
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

export const editTask = (action: any): EditTaskAction => {
  return {
    type: 'EDIT_TASK',
    taskId: action.taskId,
    description: action.description
  }
}

export const toggleIscompletedOfTask = (
  action: any
): ToggleIscompletedOfTaskAction => {
  return {
    type: 'TOGGLE_ISCOMPLETED_OF_TASK',
    taskId: action.taskId,
    isCompleted: action.isCompleted
  }
}
