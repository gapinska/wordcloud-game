import { Types } from '../actions/data'

const INITIAL_STATE = {
	data: [],
	error: ''
}

export default function data(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.GET_DATA_SUCCESS: {
			return {
				...state,
				data: action.payload.data
			}
		}
		case Types.DATA_ERROR: {
			return {
				...state,
				error: action.payload.error
			}
		}
		default: {
			return state
		}
	}
}
