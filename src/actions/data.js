export const Types = {
	GET_DATA_REQUEST: 'data/get_data_request',
	GET_DATA_SUCCESS: 'data/get_data_success',
	DATA_ERROR: 'data/data_error'
}

export const getDataRequest = () => ({
	type: Types.GET_DATA_REQUEST
})

export const getDataSuccess = ({ data }) => ({
	type: Types.GET_DATA_SUCCESS,
	payload: {
		data
	}
})

export const dataError = ({ error }) => ({
	type: Types.DATA_ERROR,
	payload: {
		error
	}
})
