import React, { Component } from 'react';
import { Typography } from 'antd';
import Row from '../Row';
import List from '../List';
import DetailsPerson from '../DetailsPerson';
import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../services/swapi';

const { Text } = Typography;

class WrapperPerson extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'selectedPerson': '1',
		};
	}

	onPersonSelected = (id) => {
		this.setState({
			'selectedPerson': id,
		});
	}

	render() {
		const { selectedPerson } = this.state;

		const ItemList = (
			<List
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
			>
				{
					({ name, gender, birthYear }) => (
						<>
							<Text strong>{name}</Text>
							<Text code>{gender}</Text>
							<Text code>{birthYear}</Text>
						</>
					)
				}
			</List>
		);

		const Details = (
			<DetailsPerson personID={selectedPerson} />
		);

		return (
			<ErrorBoundary>
				<Row left={ItemList} right={Details} />
			</ErrorBoundary>
		);
	}
}

export default WrapperPerson;
