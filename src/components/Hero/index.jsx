/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Avatar,
	Box,
	FilterList,
	Flex,
	Heading,
} from '@primer/components';
import SwapiService from '../../services/swapi';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const HeroContent = ({ planet }) => {
	const {
		diameter, id, name, population, rotationPeriod,
	} = planet;

	return (
		<>
			<Flex flexShrink={0}>
				<Avatar
					flexShrink={0}
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
					size={192}
					alt={`Planet ${name}`}
				/>
			</Flex>
			<Box px={2} bg="blue.2">
				<Heading as="h4" fontSize={2}>{name}</Heading>
				<FilterList>
					<FilterList.Item as="div">
						<span>Diameter: </span>
						<span>{diameter}</span>
					</FilterList.Item>
					<FilterList.Item as="div">
						<span>Population: </span>
						<span>{population}</span>
					</FilterList.Item>
					<FilterList.Item as="div">
						<span>Rotation Period: </span>
						<span>{rotationPeriod}</span>
					</FilterList.Item>
				</FilterList>
			</Box>
		</>
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
		this.updatePlanet();
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

	updatePlanet() {
		const id = Math.floor(Math.random() * 18) + 1;

		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	}

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);
		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <HeroContent planet={planet} /> : null;

		return (
			<Flex bg="blue.1" p={2} flexWrap="wrap">
				{errorMessage}
				{spinner}
				{content}
			</Flex>
		);
	}
}

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
