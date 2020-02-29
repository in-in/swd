// import React from 'react';
import List from '../List';
import withData from '../../helpers/withData';
import SwapiService from '../../services/swapi';

const swapiService = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships,
} = swapiService;

const ListPerson = withData(List, getAllPeople);
const ListPlanet = withData(List, getAllPlanets);
const ListStarship = withData(List, getAllStarships);

export {
	ListPerson,
	ListPlanet,
	ListStarship,
};
