export const Types = {
	GET_DATA_REQUEST: 'data/get_data_request',
	GET_DATA_SUCCESS: 'data/get_data_success'
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
