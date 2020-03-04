import React, { Component } from 'react';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../services/swapi';
import {
	DetailsPerson,
	DetailsPlanet,
	DetailsStarship,
	ListPerson,
	ListPlanet,
	ListStarship,
} from '../SwComponents';

class WrapperPerson extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'selectedItem': '5',
		};
	}

	onItemSelected = (selectedItem) => {
		this.setState({ selectedItem });
	}

	render() {
		const { selectedItem } = this.state;

		const left = (
			<>
				<ListPerson onItemSelected={this.onItemSelected} />
				<ListPlanet onItemSelected={this.onItemSelected} />
				<ListStarship onItemSelected={this.onItemSelected} />
			</>
		);


		const right = (
			<>
				<DetailsPerson itemID={selectedItem} />
				<DetailsPlanet itemID={selectedItem} />
				<DetailsStarship itemID={selectedItem} />
			</>
		);

		return (
			<ErrorBoundary>
				<Row left={left} right={right} />
			</ErrorBoundary>
		);
	}
}

export default WrapperPerson;
