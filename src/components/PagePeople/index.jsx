import React, { Component } from 'react';
import Row from '../Row';
import { DetailsPerson, ListPerson } from '../SwComponents';

class PagePeople extends Component {
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
				left={<ListPerson onItemSelected={this.onItemSelected} />}
				right={<DetailsPerson itemID={selectedItem} />}
			/>
		);
	}
}

export default PagePeople;
