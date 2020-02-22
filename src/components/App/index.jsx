import React, { Component } from 'react';
import { Layout } from 'antd';
import Hero from '../Hero';
import List from '../List';
import 'antd/dist/antd.css';
import '../../styles/style.css';

const {
	Header, Content, Footer,
} = Layout;

class App extends Component {
	constructor() {
		super();
		this.state = {
			'selectedPerson': null,
		};
	}

	onPersonSelected = (id) => {
		this.setState({
			'selectedPerson': id,
		});
	}

	render() {
		// const { data } = this.state;
		return (
			<>
				<Header>header</Header>
				<Content><Hero />
					<List onItemSelected={this.onPersonSelected} />
				</Content>
				<Footer>footer</Footer>
			</>
		);
	}
}

export default App;
