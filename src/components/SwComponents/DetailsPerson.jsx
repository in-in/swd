import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
import withSwapi from '../../helpers/withSwapi';

const DetailsPerson = ({ itemID, swapiService }) => {
	const { getPerson, getPersonImage } = swapiService;

	return (
		<Details
			getData={getPerson}
			getImageURL={getPersonImage}
			itemID={itemID}
		>
			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />
		</Details>
	);
};

DetailsPerson.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'swapiService': PropTypes.shape({
		'getPerson': PropTypes.func,
		'getPersonImage': PropTypes.func,
	}).isRequired,
};

export default withSwapi(DetailsPerson);
