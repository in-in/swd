import React, { Component } from 'react';
import { Typography } from 'antd';
import Row from '../Row';
import List from '../List';
import DetailsPerson from '../DetailsPerson';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi';

const { Text } = Typography;

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

		const ItemList = (
			<List
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
				renderItem={
					({ name, gender, birthYear }) => (
						<>
							<Text strong>{name}</Text>
							<Text code>{gender}</Text>
							<Text code>{birthYear}</Text>
						</>
					)
				}
			/>
		);

		const Details = (
			<DetailsPerson personID={selectedPerson} />
		);

		if (hasError) {
			return <ErrorIndicator />;
		}

		return (
			<Row left={ItemList} right={Details} />
		);
	}
}

export default WrapperPerson;
