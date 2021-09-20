import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'

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

// watch
function* mySaga() {
  yield takeEvery('GET_TASKS', getTasks)
}

export default mySaga
