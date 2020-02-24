import React, { Component } from 'react';
import { Layout } from 'antd';
import List from '../List';
import DetailsPerson from '../DetailsPerson';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi';

class WrapperPerson extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'selectedPerson': '1',
			'hasError': false,
		};
	}

	componentDidCatch() {
		this.setState({ 'hasError': true });
	}

	onPersonSelected = (id) => {
		this.setState({
			'selectedPerson': id,
		});
	}

	render() {
		const { selectedPerson, hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator />;
		}

		return (
			<Layout>
				<List
					onItemSelected={this.onPersonSelected}
					getData={this.swapiService.getAllPeople}
				/>
				<DetailsPerson personID={selectedPerson} />
			</Layout>
		);
	}
}

export default WrapperPerson;
