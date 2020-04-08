import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import {
	BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { Hero } from '../Hero';
import { Header } from '../Header';
import { PagePeople } from '../PagePeople';
import { PagePlanets } from '../PagePlanets';
import { PageStarships } from '../PageStarships';
import { PageLogin } from '../PageLogin';
import { PageProfile } from '../PageProfile';
import { Page404 } from '../Page404';
import { SwapiServiceProvider } from '../../services/swapi-context';
import { SwapiService } from '../../services/swapi';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

export class Wrapper extends Component {
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
			<SwapiServiceProvider value={this.swapiService}>
				<Router>
					<Header />
					<Content className="container" style={{ 'marginBottom': '2vw' }}>
						<Switch>
							<Route
								path="/"
								exact
								render={() => (
									<>
										<Title level={1}>Welcome to Star Wars Depot</Title>
										<Hero />
									</>
								)}
							/>
							<Route path="/people/:id?" component={PagePeople} />
							<Route path="/planets/:id?" component={PagePlanets} />
							<Route
								path="/starships/:id?"
								component={PageStarships}
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
								path="/profile"
								render={() => <PageProfile isLoggedIn={isLoggedIn} />}
							/>
							<Route component={Page404} />
						</Switch>
					</Content>
					<Footer
						className="container"
						style={{
							'display': 'flex',
							'justifyContent': 'space-between',
						}}
					>
						<Text>&copy; <a href="https://github.com/in-in">in-in</a>
							, 2020
						</Text>
						<Text>built with the Force</Text>
					</Footer>
				</Router>
			</SwapiServiceProvider>
		);
	}
}
