import React, { Component } from 'react';
import { Layout } from 'antd';
import Hero from '../Hero';
import WrapperPerson from '../WrapperPerson';
import 'antd/dist/antd.css';
import '../../styles/style.css';

const {
	Header, Content, Footer,
} = Layout;

class App extends Component {
	constructor() {
		super();
		this.state = {
			// 'selectedPerson': '1',
		};
	}

	render() {
		return (
			<>
				<Header>header</Header>
				<Content>
					<Hero />
					<WrapperPerson />
				</Content>
				<Footer>footer</Footer>
			</>
		);
	}
}

export default App;
