import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { List } from '../List';
import { withData } from '../../helpers/withData';
import { withSwapi } from '../../helpers/withSwapi';
import { withChildFunction } from '../../helpers/withChildFunction';
import { compose } from '../../helpers/compose';

const { Text } = Typography;

const renderNameAndGender = ({ name, gender }) => (
	<>
		<Text ellipsis strong>{name}</Text>
		<div>
			<Text>gender: </Text>
			<Text code>{gender}</Text>
		</div>
	</>
);
const renderNameAndCrew = ({ name, crew }) => (
	<>
		<Text ellipsis strong>{name}</Text>
		<div>
			<Text>crew: </Text>
			<Text code>{crew}</Text>
		</div>
	</>
);
const renderNameAndDiameter = ({ name, diameter }) => (
	<>
		<Text ellipsis strong>{name}</Text>
		<div>
			<Text>diameter: </Text>
			<Text code>{diameter}</Text>
		</div>
	</>
);

const mapPersonMethodsToProps = (swapiService) => ({
	'getData': swapiService.getAllPeople,
});

const mapPlanetMethodsToProps = (swapiService) => ({
	'getData': swapiService.getAllPlanets,
});

const mapStarshipMethodsToProps = (swapiService) => ({
	'getData': swapiService.getAllStarships,
});

const ListPerson = compose(
	withSwapi(mapPersonMethodsToProps),
	withData,
	withChildFunction(renderNameAndGender),
)(List);

const ListPlanet = compose(
	withSwapi(mapPlanetMethodsToProps),
	withData,
	withChildFunction(renderNameAndDiameter),
)(List);

const ListStarship = compose(
	withSwapi(mapStarshipMethodsToProps),
	withData,
	withChildFunction(renderNameAndCrew),
)(List);

renderNameAndGender.propTypes = {
	'gender': PropTypes.string.isRequired,
	'name': PropTypes.string.isRequired,
};

renderNameAndCrew.propTypes = {
	'crew': PropTypes.string.isRequired,
	'name': PropTypes.string.isRequired,
};

renderNameAndDiameter.propTypes = {
	'name': PropTypes.string.isRequired,
	'diameter': PropTypes.string.isRequired,
};


export {
	ListPerson,
	ListPlanet,
	ListStarship,
};
