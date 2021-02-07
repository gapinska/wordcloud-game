import React, { Component } from 'react'
import './App.scss'
import Game from './components/Game'
import { connect } from 'react-redux'
import { getDataRequest } from './actions/data'

class App extends Component {
	constructor(props) {
		super(props)
		this.props.getDataRequest()
	}

	render() {
		const categories = this.props.data.data
		return <div className="App">{!!categories && !!categories.length && <Game categories={categories} />}</div>
	}
}

export default connect(({ data }) => ({ data }), {
	getDataRequest
})(App)
