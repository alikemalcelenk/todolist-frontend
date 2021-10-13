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
export type GetTaskActionReturn = {
  type: string
}

export type AddTaskAction = {
  task: string
}

export type AddTaskActionReturn = {
  type: string
  description: string
}

export type DeleteTaskAction = {
  taskId: string
}

export type DeleteTaskActionReturn = {
  type: string
  taskId: string
}

export type EditTaskAction = {
  taskId: string
  description: string
}

export type EditTaskActionReturn = {
  type: string
  taskId: string
  description: string
}

export type SwitchCompletionOfTaskAction = {
  taskId: string
  isCompleted: boolean
}

export type SwitchCompletionOfTaskActionReturn = {
  type: string
  taskId: string
  isCompleted: boolean
}

export type SetIsErrorAnyRequestAction = {
  isErrorAnyRequest: boolean
}

export type SetIsErrorAnyRequestActionReturn = {
  type: string
  isErrorAnyRequest: boolean
}
