import React, { Component } from 'react'
import './App.scss'
import Game from './components/Game'
import { connect } from 'react-redux'
import { getDataRequest, dataError } from './actions/data'
import Alert from '@material-ui/lab/Alert'

class App extends Component {
	constructor(props) {
		super(props)
		this.props.getDataRequest()
	}

	render() {
		const categories = this.props.data.data
		return (
			<div className="App">
				{!!this.props.data.error && <Alert severity="error">{this.props.data.error} </Alert>}
				{!!categories && !!categories.length && <Game categories={categories} />}
			</div>
		)
	}
}

export default connect(({ data }) => ({ data }), {
	getDataRequest,
	dataError
})(App)
