import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import withData from '../../helpers/withData';
import withSwapi from '../../helpers/withSwapi';

const withChildFunction = (Wrapped, fn) => (props) => <Wrapped {...props}>{fn}</Wrapped>;

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{name} {model}</span>;

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
		withChildFunction(List, renderName),
	),
	mapPersonMethodsToProps,
);
const ListPlanet = withSwapi(
	withData(
		withChildFunction(List, renderName),
	),
	mapPlanetMethodsToProps,
);
const ListStarship = withSwapi(
	withData(
		withChildFunction(List, renderModelAndName),
	),
	mapStarshipMethodsToProps,
);

renderName.propTypes = {
	'name': PropTypes.string.isRequired,
};

renderModelAndName.propTypes = {
	'model': PropTypes.string.isRequired,
	'name': PropTypes.string.isRequired,
};


export {
	ListPerson,
	ListPlanet,
	ListStarship,
};
