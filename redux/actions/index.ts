type TaskAction = {
  type: string
}

export const getTasks = (): TaskAction => {
  return { type: 'GET_TASKS' }
}
