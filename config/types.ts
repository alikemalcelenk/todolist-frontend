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
