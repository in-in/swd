import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
import withSwapi from '../../helpers/withSwapi';

const DetailsStarship = ({ itemID, getData, getImageURL }) => (
	<Details
		getData={getData}
		getImageURL={getImageURL}
		itemID={itemID}
	>
		<Record field="model" label="Model" />
		<Record field="length" label="Length" />
	</Details>
);

const mapMethodsToProps = (swapiService) => ({
	'getData': swapiService.getStarship,
	'getImageURL': swapiService.getStarshipImage,
});

DetailsStarship.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
};

export default withSwapi(mapMethodsToProps)(DetailsStarship);
