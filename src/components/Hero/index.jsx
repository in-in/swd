/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
	Avatar,
	Box,
	FilterList,
	Flex,
	Heading,
} from '@primer/components';
import SwapiService from '../../services/swapi';

class Hero extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'planet': {},
		};
		this.updatePlanet();
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet });
	}

	updatePlanet() {
		const id = Math.floor(Math.random() * 20);

		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded);
	}

	render() {
		const {
			'planet': {
				diameter, id, name, population, rotationPeriod,
			},
		} = this.state;

		return (
			<Flex bg="blue.1" p={2} flexWrap="wrap">
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
			</Flex>
		);
	}
}

export default Hero;
