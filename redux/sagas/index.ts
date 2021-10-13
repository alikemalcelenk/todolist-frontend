import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'

// types
import {
  AddTaskActionReturn as AddTaskActionReturnType,
  DeleteTaskActionReturn as DeleteTaskActionReturnType,
  EditTaskActionReturn as EditTaskActionReturnType,
  SwitchCompletionOfTaskActionReturn as SwitchCompletionOfTaskActionReturnType
} from '@config/types'

// env
import env from '@config/env'

function* getTasks(): any {
  try {
    yield put({ type: 'GET_TASKS_REQUEST' })
    const tasks: any = yield call(() => {
      return axios.get(env.API_SERVICE_URL)
    })
    yield put({ type: 'GET_TASKS_SUCCESS', tasks: tasks.data.tasks })
  } catch (error) {
    yield put({ type: 'GET_TASKS_FAILURE' })
  }
}

function* addTask({ description }: AddTaskActionReturnType): any {
  try {
    yield put({ type: 'ADD_TASK_REQUEST' })
    const tasks = yield call(() => {
      return axios.post(env.API_SERVICE_URL, {
        description
      })
    })
    yield put({ type: 'ADD_TASK_SUCCESS', task: tasks.data.task })
  } catch (error) {
    yield put({ type: 'ADD_TASK_FAILURE' })
  }
}

function* deleteTask({ taskId }: DeleteTaskActionReturnType): any {
  try {
    yield put({ type: 'DELETE_TASK_REQUEST' })
    yield call(() => {
      return axios.delete(`${env.API_SERVICE_URL}/${taskId}`)
    })

    yield put({ type: 'DELETE_TASK_SUCCESS', taskId })
  } catch (error) {
    yield put({ type: 'DELETE_TASK_FAILURE' })
  }
}

function* editTask({ taskId, description }: EditTaskActionReturnType): any {
  try {
    yield put({ type: 'EDIT_TASK_REQUEST' })
    yield call(() => {
      return axios.put(`${env.API_SERVICE_URL}/${taskId}`, {
        description
      })
    })
    yield put({
      type: 'EDIT_TASK_SUCCESS',
      taskId,
      description
    })
  } catch (error) {
    yield put({ type: 'EDIT_TASK_FAILURE' })
  }
}

function* switchCompletionOfTask({
  taskId,
  isCompleted
}: SwitchCompletionOfTaskActionReturnType): any {
  try {
    yield call(() => {
      return axios.put(`${env.API_SERVICE_URL}/${taskId}`, {
        isCompleted: !isCompleted
      })
    })
    yield put({ type: 'SWITCH_COMPLETION_OF_TASK_SUCCESS', taskId })
  } catch (error) {
    yield put({ type: 'SWITCH_COMPLETION_OF_TASK_FAILURE' })
  }
}

// watch
function* mySaga() {
  yield takeEvery('GET_TASKS', getTasks)
  yield takeEvery('ADD_TASK', addTask)
  yield takeEvery('DELETE_TASK', deleteTask)
  yield takeEvery('EDIT_TASK', editTask)
  yield takeEvery('SWITCH_COMPLETION_OF_TASK', switchCompletionOfTask)
}

export default mySaga
