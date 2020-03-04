import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
import withSwapi from '../../helpers/withSwapi';

const DetailsStarship = ({ itemID, swapiService }) => {
	const { getStarship, getStarshipImage } = swapiService;

	return (
		<Details
			getData={getStarship}
			getImageURL={getStarshipImage}
			itemID={itemID}
		>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
		</Details>
	);
};

DetailsStarship.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'swapiService': PropTypes.shape({
		'getStarship': PropTypes.func,
		'getStarshipImage': PropTypes.func,
	}).isRequired,
};

export default withSwapi(DetailsStarship);
