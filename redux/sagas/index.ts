import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'

// types
import {
  AddTaskAction as AddTaskActionType,
  DeleteTaskAction as DeleteTaskActionType,
  EditTaskAction as EditTaskActionType,
  ToggleIscompletedOfTaskAction as ToggleIscompletedOfTaskActionType
} from '../../config/types'

// env
import env from '../../config/env'

function* getTasks(): any {
  try {
    yield put({ type: 'REQUEST_GET_TASKS' })
    const tasks: any = yield call(() => {
      return axios.get(env.API_SERVICE_URL)
    })
    yield put({ type: 'REQUEST_GET_TASKS_SUCCESS', tasks: tasks.data.tasks })
  } catch (error) {
    yield put({ type: 'REQUEST_GET_TASKS_FAILED' })
  }
}

function* addTask({ description }: AddTaskActionType): any {
  try {
    yield put({ type: 'REQUEST_ADD_TASK' })
    const tasks = yield call(() => {
      return axios.post(env.API_SERVICE_URL, {
        description
      })
    })
    yield put({ type: 'REQUEST_ADD_TASK_SUCCESS', task: tasks.data.task })
  } catch (error) {
    yield put({ type: 'REQUEST_ADD_TASK_FAILED' })
  }
}

function* deleteTask({ taskId }: DeleteTaskActionType): any {
  try {
    yield put({ type: 'REQUEST_DELETE_TASK' })
    yield call(() => {
      return axios.delete(`${env.API_SERVICE_URL}/${taskId}`)
    })

    yield put({ type: 'REQUEST_DELETE_TASK_SUCCESS', taskId })
  } catch (error) {
    yield put({ type: 'REQUEST_DELETE_TASK_FAILED' })
  }
}

function* editTask({ taskId, description }: EditTaskActionType): any {
  try {
    yield put({ type: 'REQUEST_EDIT_TASK' })
    yield call(() => {
      return axios.put(`${env.API_SERVICE_URL}/${taskId}`, {
        description
      })
    })
    yield put({
      type: 'REQUEST_EDIT_TASK_SUCCESS',
      taskId,
      description
    })
  } catch (error) {
    yield put({ type: 'REQUEST_EDIT_TASK_FAILED' })
  }
}

function* toggleIscompletedOfTask({
  taskId,
  isCompleted
}: ToggleIscompletedOfTaskActionType): any {
  try {
    yield call(() => {
      return axios.put(`${env.API_SERVICE_URL}/${taskId}`, {
        isCompleted: !isCompleted
      })
    })
    yield put({ type: 'REQUEST_TOGGLE_ISCOMPLETED_OF_TASK_SUCCESS', taskId })
  } catch (error) {
    yield put({ type: 'REQUEST_TOGGLE_ISCOMPLETED_OF_TASK_FAILED' })
  }
}

// watch
function* mySaga() {
  yield takeEvery('GET_TASKS', getTasks)
  yield takeEvery('ADD_TASK', addTask)
  yield takeEvery('DELETE_TASK', deleteTask)
  yield takeEvery('EDIT_TASK', editTask)
  yield takeEvery('TOGGLE_ISCOMPLETED_OF_TASK', toggleIscompletedOfTask)
}

export default mySaga
