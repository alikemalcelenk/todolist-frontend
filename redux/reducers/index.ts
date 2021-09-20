// types
import { Tasks as TasksType, TaskAction } from '../../config/types'

const initialState: TasksType = {
  tasks: [
    {
      _id: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isCompleted: false,
      created_at: new Date('2020-11-01T15:10:18.164+00:00')
    },
    {
      _id: 2,
      description: 'Loremmm',
      isCompleted: true,
      created_at: new Date('2021-03-25T15:10:18.164+00:00')
    },
    {
      _id: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isCompleted: true,
      created_at: new Date('2021-05-07T15:10:18.164+00:00')
    },
    {
      _id: 4,
      description: 'Lorem ipsum dolor sit amet.',
      isCompleted: false,
      created_at: new Date('2021-09-20T15:10:18.164+00:00')
    }
  ]
}

export const reducer = (
  state: TasksType = initialState,
  action: TaskAction
): TasksType => {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state }

    default:
      return state
  }
}
