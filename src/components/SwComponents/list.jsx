import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import List from '../List';
import withData from '../../helpers/withData';
import withSwapi from '../../helpers/withSwapi';
import withChildFunction from '../../helpers/withChildFunction';
import compose from '../../helpers/compose';

const { Text } = Typography;

const renderNameAndGender = ({ name, gender }) => (
	<>
		<Text strong>{name}</Text>
		<Text code>{gender}</Text>
	</>
);
const renderNameAndCrew = ({ name, crew }) => (
	<>
		<Text strong>{name}</Text>
		<Text code>{crew}</Text>
	</>
);
const renderNameAndDiameter = ({ name, diameter }) => (
	<>
		<Text strong>{name}</Text>
		<Text code>{diameter}</Text>
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
