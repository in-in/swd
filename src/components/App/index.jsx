import React, { Component } from 'react';
import { Layout } from 'antd';
import Hero from '../Hero';
import WrapperPerson from '../WrapperPerson';
import ErrorBoundary from '../ErrorBoundary';
import { SwapiServiceProvider } from '../../services/swapi-context';
import SwapiService from '../../services/swapi';

import 'antd/dist/antd.css';
import '../../styles/style.css';

const {
	Header, Content, Footer,
} = Layout;

class App extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			// 'selectedPerson': '1',
		};
	}


	render() {
		return (
			<ErrorBoundary>
				<SwapiServiceProvider value={this.swapiService}>
					<Header>header</Header>
					<Content>
						<Hero />
						<WrapperPerson />
					</Content>
					<Footer>footer</Footer>
				</SwapiServiceProvider>
			</ErrorBoundary>
		);
	}
}

export default App;
