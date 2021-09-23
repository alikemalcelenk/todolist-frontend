export type Task = {
  _id: string
  description: string
  isCompleted: boolean
  created_at: Date
}

export type Tasks = {
  tasks: Task[] | []
}

export type TaskAction = {
  type: string
  tasks?: Task[] | []
  task?: Task
  taskId?: string
  description?: string
  isErrorAnyRequest?: boolean
}

export type TaskReducerState = {
  tasks: Task[] | []
  isLoadingGetTasks?: boolean
  isErrorGetTasks?: boolean
  isLoadingAddTask?: boolean
  isErrorAnyRequest?: boolean
  isLoadingDeleteTask?: boolean
  isLoadingEditTask?: boolean
}

// redux
export type GetTaskAction = {
  type: string
}

export type AddTaskAction = {
  type: string
  description: string
}

export type DeleteTaskAction = {
  type: string
  taskId: string
}

export type EditTaskAction = {
  type: string
  taskId: string
  description: string
}

export type ToggleIscompletedOfTaskAction = {
  type: string
  taskId: string
  isCompleted: boolean
}

export type SetIsErrorAnyRequestAction = {
  type: string
  isErrorAnyRequest: boolean
}
