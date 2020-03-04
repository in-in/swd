import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
import withSwapi from '../../helpers/withSwapi';

const DetailsPlanet = ({ itemID, getData, getImageURL }) => (
	<Details
		getData={getData}
		getImageURL={getImageURL}
		itemID={itemID}
	>
		<Record field="diameter" label="Diameter" />
		<Record field="population" label="Population" />
	</Details>
);

const mapMethodsToProps = (swapiService) => ({
	'getData': swapiService.getPlanet,
	'getImageURL': swapiService.getPlanetImage,
});

DetailsPlanet.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
};

export default withSwapi(DetailsPlanet, mapMethodsToProps);
