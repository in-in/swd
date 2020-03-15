import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import {
	BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Hero from '../Hero';
import Header from '../Header';
import PagePeople from '../PagePeople';
import PagePlanets from '../PagePlanets';
import PageStarships from '../PageStarships';
import PageLogin from '../PageLogin';
import PageSecret from '../PageSecret';
import Page404 from '../Page404';
import ErrorBoundary from '../ErrorBoundary';
import { SwapiServiceProvider } from '../../services/swapi-context';
import SwapiService from '../../services/swapi';
import 'antd/dist/antd.css';
import '../../styles/style.css';
import { DetailsStarship } from '../SwComponents';

const { Content, Footer } = Layout;
const { Title } = Typography;

class App extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'isLoggedIn': false,
		};
	}

	onLogin = () => {
		this.setState(
			(state) => ({ 'isLoggedIn': !state.isLoggedIn }),
		);
	}

	render() {
		const { isLoggedIn } = this.state;

		return (
			<ErrorBoundary>
				<SwapiServiceProvider value={this.swapiService}>
					<Router>
						<Header />
						<Content className="container" style={{ 'marginBottom': '2vw' }}>
							<Hero />
							<Switch>
								<Route
									path="/"
									exact
									render={() => <Title level={2}>Welcome to Star Wars Depot</Title>}
								/>
								<Route path="/people/:id?" component={PagePeople} />
								<Route path="/planets" component={PagePlanets} />
								<Route
									path="/starships"
									exact
									component={PageStarships}
								/>
								<Route
									path="/starships/:id"
									render={(
										{ 'match': { 'params': { id } } },
									) => <DetailsStarship itemID={id} />}
								/>
								<Route
									path="/login"
									render={() => (
										<PageLogin
											onLogin={this.onLogin}
											isLoggedIn={isLoggedIn}
										/>
									)}
								/>
								<Route
									path="/secret"
									render={() => <PageSecret isLoggedIn={isLoggedIn} />}
								/>
								<Route component={Page404} />
							</Switch>
						</Content>
						<Footer className="container">footer</Footer>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundary>
		);
	}
}

export default App;
