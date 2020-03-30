import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	Layout,
	List,
	Spin,
	Typography,
} from 'antd';
import { SwapiService } from '../../services/swapi';
import { ErrorIndicator } from '../ErrorIndicator';
import s from './style.module.css';

const { Meta } = Card;
const { Title, Text } = Typography;
const { Item } = List;

const HeroContent = ({ planet }) => {
	const {
		diameter, id, name, population, rotationPeriod,
	} = planet;

	const data = [
		{
			'name': 'Diameter',
			'value': diameter,
		},
		{
			'name': 'Population',
			'value': population,
		},
		{
			'name': 'Rotation Period',
			'value': rotationPeriod,
		},
	];

	return (
		<Card
			className={s.hero_content}
			bordered={false}
			cover={(
				<img
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
					alt={`Planet ${name}`}
				/>
			)}
		>
			<Meta
				title={<Title level={4}>{name}</Title>}
			/>
			<List
				dataSource={data}
				renderItem={(item) => (
					<Item>
						<Text>{item.name}:&nbsp;</Text>
						<Text ellipsis>{item.value}</Text>
					</Item>
				)}
			/>
		</Card>
	);
};

export class Hero extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'planet': {},
			'loading': true,
			'error': false,
		};
	}

	componentDidMount() {
		const { updateInterval } = this.props;

		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, updateInterval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			'loading': false,
		});
	}

	onError = () => {
		this.setState({
			'error': true,
			'loading': false,
		});
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 18) + 2;

		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	}

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);
		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spin size="large" /> : null;
		const content = hasData ? <HeroContent planet={planet} /> : null;

		return (
			<Layout style={{ 'marginBottom': '2vw' }}>
				{errorMessage}
				{spinner}
				{content}
			</Layout>
		);
	}
}

Hero.propTypes = {
	'updateInterval': PropTypes.number,
};

Hero.defaultProps = {
	'updateInterval': 30000,
};

HeroContent.propTypes = {
	'planet': PropTypes.shape({
		'diameter': PropTypes.string,
		'id': PropTypes.string,
		'name': PropTypes.string,
		'population': PropTypes.string,
		'rotationPeriod': PropTypes.string,
	}).isRequired,
};
