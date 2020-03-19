import React from 'react';
import PropTypes from 'prop-types';
import { Details } from '../Details';
import { Record } from '../Record';
import { withSwapi } from '../../helpers/withSwapi';

const mapMethodsToProps = (swapiService) => ({
	'getData': swapiService.getPerson,
	'getImageURL': swapiService.getPersonImage,
});

const Person = ({ itemID, getData, getImageURL }) => (
	<Details
		getData={getData}
		getImageURL={getImageURL}
		itemID={itemID}
	>
		<Record field="gender" label="Gender" />
		<Record field="eyeColor" label="Eye Color" />
	</Details>
);

export const DetailsPerson = withSwapi(mapMethodsToProps)(Person);

Person.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
};
