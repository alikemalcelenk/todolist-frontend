export type Task = {
  _id?: number
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
}

export type TaskReducerState = {
  tasks: Task[] | []
  isLoadingGetTasks?: boolean
  isErrorGetTasks?: boolean
  isLoadingAddTask?: boolean
  isErrorAnyRequest?: boolean
}
