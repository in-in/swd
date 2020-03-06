import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from '../Hero';
import Header from '../Header';
import PagePeople from '../PagePeople';
import PagePlanets from '../PagePlanets';
import PageStarships from '../PageStarships';
import ErrorBoundary from '../ErrorBoundary';
import { SwapiServiceProvider } from '../../services/swapi-context';
import SwapiService from '../../services/swapi';
import 'antd/dist/antd.css';
import '../../styles/style.css';

const { Content, Footer } = Layout;
const { Title } = Typography;

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
						<Header />
						<Content>
							<Hero />
							<Route
								path="/"
								exact
								render={() => <Title level={2}>Welcome to Star Wars Depot</Title>}
							/>
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
