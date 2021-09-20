import { put, takeEvery } from 'redux-saga/effects'

function* getTasks() {
  console.log('SAGA TEST')
  yield put({ type: 'GET_TASKS_SAGA' })
}

// watch
function* mySaga() {
  yield takeEvery('GET_TASKS', getTasks)
}

export default mySaga
