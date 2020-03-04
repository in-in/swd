import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import List from '../List';
import withData from '../../helpers/withData';
import withSwapi from '../../helpers/withSwapi';

const { Text } = Typography;

const withChildFunction = (Wrapped, fn) => (props) => <Wrapped {...props}>{fn}</Wrapped>;

const renderNameAndGender = ({ name, gender }) => (
	<>
		<Text strong>{name}</Text>
		<Text code>{gender}</Text>
	</>
);
const renderNameAndModel = ({ name, model }) => (
	<>
		<Text strong>{name}</Text>
		<Text code>{model}</Text>
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

const ListPerson = withSwapi(
	withData(
		withChildFunction(List, renderNameAndGender),
	),
	mapPersonMethodsToProps,
);
const ListPlanet = withSwapi(
	withData(
		withChildFunction(List, renderNameAndDiameter),
	),
	mapPlanetMethodsToProps,
);
const ListStarship = withSwapi(
	withData(
		withChildFunction(List, renderNameAndModel),
	),
	mapStarshipMethodsToProps,
);

renderNameAndGender.propTypes = {
	'gender': PropTypes.string.isRequired,
	'name': PropTypes.string.isRequired,
};

renderNameAndModel.propTypes = {
	'model': PropTypes.string.isRequired,
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
