import React, { Component } from 'react';
import Row from '../Row';
import { DetailsPlanet, ListPlanet } from '../SwComponents';

class PagePlanets extends Component {
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

		return (
			<Row
				left={<ListPlanet onItemSelected={this.onItemSelected} />}
				right={<DetailsPlanet itemID={selectedItem} />}
			/>
		);
	}
}

export default PagePlanets;
