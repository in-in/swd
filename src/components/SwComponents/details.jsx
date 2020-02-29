import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
// import withData from '../../helpers/withData';
import SwapiService from '../../services/swapi';

const swapiService = new SwapiService();

const {
	getPerson,
	getPersonImage,
	getPlanet,
	getPlanetImage,
	getStarship,
	getStarshipImage,
} = swapiService;

const DetailsPerson = ({ itemID }) => (
	<Details
		getData={getPerson}
		getImageURL={getPersonImage}
		itemID={itemID}
	>
		<Record field="gender" label="Gender" />
		<Record field="eyeColor" label="Eye Color" />
	</Details>
);
const DetailsPlanet = ({ itemID }) => (
	<Details
		getData={getPlanet}
		getImageURL={getPlanetImage}
		itemID={itemID}
	>
		<Record field="diameter" label="Diameter" />
		<Record field="population" label="Population" />
	</Details>
);
const DetailsStarship = ({ itemID }) => (
	<Details
		getData={getStarship}
		getImageURL={getStarshipImage}
		itemID={itemID}
	>
		<Record field="model" label="Model" />
		<Record field="length" label="Length" />
	</Details>
);

DetailsPerson.propTypes = {
	'itemID': PropTypes.string.isRequired,
};
DetailsPlanet.propTypes = {
	'itemID': PropTypes.string.isRequired,
};
DetailsStarship.propTypes = {
	'itemID': PropTypes.string.isRequired,
};

export {
	DetailsPerson,
	DetailsPlanet,
	DetailsStarship,
};
