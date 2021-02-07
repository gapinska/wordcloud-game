import DataSagas from './data'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
	yield all([ ...DataSagas ])
}
