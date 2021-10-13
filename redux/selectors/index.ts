import { createSelector } from 'reselect'

// types
import { Task as TaskType } from '@config/types'

const taskSelector = (state: any) => state

const completedTaskSelector = createSelector(taskSelector, (tasks) =>
  tasks.filter((task: TaskType) => task.isCompleted)
)

const incompletedTaskSelector = createSelector(taskSelector, (tasks) =>
  tasks.filter((task: TaskType) => !task.isCompleted)
)

export { completedTaskSelector, incompletedTaskSelector }
