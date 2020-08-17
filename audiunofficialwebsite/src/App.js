import React, { Component } from 'react';
import {StateProvider} from './utils/store'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null
		}
	}

	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
			authUser ? this.setState({authUser}) : this.setState({authUser: null})
		})
	}

	componentWillUnmount() {
		this.listener();
	}

	render() {
		return <StateProvider>{this.props.children}</StateProvider>;
	}
}

export default App;
