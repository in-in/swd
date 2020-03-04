import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
import withSwapi from '../../helpers/withSwapi';

const DetailsPerson = ({ itemID, getData, getImageURL }) => (
	<Details
		getData={getData}
		getImageURL={getImageURL}
		itemID={itemID}
	>
		<Record field="gender" label="Gender" />
		<Record field="eyeColor" label="Eye Color" />
	</Details>
);

const mapMethodsToProps = (swapiService) => ({
	'getData': swapiService.getPerson,
	'getImageURL': swapiService.getPersonImage,
});

DetailsPerson.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
};

export default withSwapi(DetailsPerson, mapMethodsToProps);
