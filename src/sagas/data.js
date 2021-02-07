import { takeEvery, call, fork, put } from 'redux-saga/effects'
import * as actions from '../actions/data'
import * as api from '../api/data'

function* getData() {
	try {
		const result = yield call(api.getData)
		yield put(
			actions.getDataSuccess({
				data: result.data
			})
		)
	} catch (e) {}
}

function* watchGetDataRequest() {
	yield takeEvery(actions.Types.GET_DATA_REQUEST, getData)
}

const dataSagas = [ fork(watchGetDataRequest) ]

export default dataSagas
