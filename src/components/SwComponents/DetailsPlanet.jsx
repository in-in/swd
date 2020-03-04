import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
import withSwapi from '../../helpers/withSwapi';

const DetailsPlanet = ({ itemID, swapiService }) => {
	const { getPlanet, getPlanetImage } = swapiService;

	return (
		<Details
			getData={getPlanet}
			getImageURL={getPlanetImage}
			itemID={itemID}
		>
			<Record field="diameter" label="Diameter" />
			<Record field="population" label="Population" />
		</Details>
	);
};

DetailsPlanet.propTypes = {
	'itemID': PropTypes.string.isRequired,
	'swapiService': PropTypes.shape({
		'getPlanet': PropTypes.func,
		'getPlanetImage': PropTypes.func,
	}).isRequired,
};

export default withSwapi(DetailsPlanet);
