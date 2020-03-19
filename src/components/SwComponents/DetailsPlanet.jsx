import React from 'react';
import PropTypes from 'prop-types';
import { Details } from '../Details';
import { Record } from '../Record';
import { withSwapi } from '../../helpers/withSwapi';

const mapMethodsToProps = (swapiService) => ({
	'getData': swapiService.getPlanet,
	'getImageURL': swapiService.getPlanetImage,
});

const Planet = ({ itemID, getData, getImageURL }) => (
	<Details
		getData={getData}
		getImageURL={getImageURL}
		itemID={itemID}
	>
		<Record field="diameter" label="Diameter" />
		<Record field="population" label="Population" />
	</Details>
);

export const DetailsPlanet = withSwapi(mapMethodsToProps)(Planet);

Planet.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
};
