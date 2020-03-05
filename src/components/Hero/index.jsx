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
import ErrorIndicator from '../ErrorIndicator';

const { Meta } = Card;
const { Title } = Typography;
const { Item } = List;

const HeroContent = ({ planet }) => {
	const {
		diameter, id, name, population, rotationPeriod,
	} = planet;

	return (
		<Card
			style={{ 'width': 300 }}
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
			<List>
				<Item>
					<span>Diameter: </span>
					<span>{diameter}</span>
				</Item>
				<Item>
					<span>Population: </span>
					<span>{population}</span>
				</Item>
				<Item>
					<span>Rotation Period: </span>
					<span>{rotationPeriod}</span>
				</Item>
			</List>
		</Card>
	);
};

class Hero extends Component {
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
			<Layout>
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

export default Hero;
