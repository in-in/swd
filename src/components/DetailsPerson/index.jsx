import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	Layout,
	List,
	Spin,
	Typography,
} from 'antd';
import SwapiService from '../../services/swapi';

const { Meta } = Card;
const { Title } = Typography;
const { Item } = List;

class DetailsPerson extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'person': {},
			'loading': true,
		};
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		const { personID } = this.props;
		if (personID !== prevProps.personID) {
			this.updatePerson();
		}
	}

	updatePerson() {
		const { personID } = this.props;

		if (!personID) {
			return;
		}

		this.swapiService
			.getPerson(personID)
			.then((person) => {
				this.setState({
					person,
					'loading': false,
				});
			});
	}

	render() {
		const {
			person,
			loading,
			'person': {
				birthYear, eyeColor, gender, id, name,
			},
		} = this.state;

		if (!person) {
			return <span>Select a person from a list</span>;
		}

		return (
			<Layout>
				{loading
					? <Spin size="large" />
					: (
						<Card
							style={{ 'width': 300 }}
							cover={(
								<img
									src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
									alt="Person ."
								/>
							)}
						>
							<Meta
								title={<Title level={4}>{name}</Title>}
							/>
							<List>
								<Item>
									<span>Birth Year: </span>
									<span>{birthYear}</span>
								</Item>
								<Item>
									<span>Eye Color: </span>
									<span>{eyeColor}</span>
								</Item>
								<Item>
									<span>Gender: </span>
									<span>{gender}</span>
								</Item>
							</List>
						</Card>
					)}

			</Layout>
		);
	}
}

DetailsPerson.propTypes = {
	'personID': PropTypes.number.isRequired,
};

export default DetailsPerson;
