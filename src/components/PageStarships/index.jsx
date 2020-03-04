import React, { Component } from 'react';
import Row from '../Row';
import { DetailsStarship, ListStarship } from '../SwComponents';

class PageStarships extends Component {
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
				left={<ListStarship onItemSelected={this.onItemSelected} />}
				right={<DetailsStarship itemID={selectedItem} />}
			/>
		);
	}
}

export default PageStarships;
