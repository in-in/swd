import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from '../Hero';
import PagePeople from '../PagePeople';
import PagePlanets from '../PagePlanets';
import PageStarships from '../PageStarships';
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
					<Router>
						<Header>header</Header>
						<Content>
							<Hero />
							<Route path="/people" component={PagePeople} />
							<Route path="/planets" component={PagePlanets} />
							<Route path="/starships" component={PageStarships} />
						</Content>
						<Footer>footer</Footer>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundary>
		);
	}
}

export default App;
