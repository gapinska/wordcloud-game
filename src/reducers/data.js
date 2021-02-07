import { Types } from '../actions/data'

const INITIAL_STATE = {
	data: []
}

export default function data(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.GET_DATA_SUCCESS: {
			return {
				data: action.payload.data
			}
		}
		default: {
			return state
		}
	}
}
