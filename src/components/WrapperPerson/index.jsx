import React, { Component } from 'react';
import { Typography } from 'antd';
import Row from '../Row';
import List from '../List';
import Details from '../Details';
import Record from '../Record';
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
		const {
			getPerson,
			getPersonImage,
		} = this.swapiService;

		const left = (
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


		const right = (
			<Details
				getData={getPerson}
				getImageURL={getPersonImage}
				itemID={selectedPerson}
			>
				<Record field="gender" label="Gender" />
				<Record field="eyeColor" label="Eye Color" />
			</Details>
		);

		return (
			<ErrorBoundary>
				<Row left={left} right={right} />
			</ErrorBoundary>
		);
	}
}

export default WrapperPerson;
