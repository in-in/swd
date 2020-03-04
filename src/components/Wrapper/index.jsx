import React, { Component } from 'react';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import {
	DetailsPerson,
	DetailsPlanet,
	DetailsStarship,
	ListPerson,
	ListPlanet,
	ListStarship,
} from '../SwComponents';

class Wrapper extends Component {
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
			<ErrorBoundary>
				<>
					<Row
						left={<ListPerson onItemSelected={this.onItemSelected} />}
						right={<DetailsPerson itemID={selectedItem} />}
					/>
					<Row
						left={<ListPlanet onItemSelected={this.onItemSelected} />}
						right={<DetailsPlanet itemID={selectedItem} />}
					/>
					<Row
						left={<ListStarship onItemSelected={this.onItemSelected} />}
						right={<DetailsStarship itemID={selectedItem} />}
					/>
				</>
			</ErrorBoundary>
		);
	}
}

export default Wrapper;
