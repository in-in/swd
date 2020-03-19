import React from 'react';
import PropTypes from 'prop-types';
import { Details } from '../Details';
import { Record } from '../Record';
import { withSwapi } from '../../helpers/withSwapi';

const mapMethodsToProps = (swapiService) => ({
	'getData': swapiService.getStarship,
	'getImageURL': swapiService.getStarshipImage,
});

const Starship = ({ itemID, getData, getImageURL }) => (
	<Details
		getData={getData}
		getImageURL={getImageURL}
		itemID={itemID}
	>
		<Record field="model" label="Model" />
		<Record field="length" label="Length" />
	</Details>
);

export const DetailsStarship = withSwapi(mapMethodsToProps)(Starship);

Starship.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
};
