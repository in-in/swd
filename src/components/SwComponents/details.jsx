import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details';
import Record from '../Record';
import { SwapiServiceConsumer } from '../../services/swapi-context';

export const DetailsPerson = ({ itemID }) => (

	<SwapiServiceConsumer>
		{
			({ getPerson, getPersonImage }) => (
				<Details
					getData={getPerson}
					getImageURL={getPersonImage}
					itemID={itemID}
				>
					<Record field="gender" label="Gender" />
					<Record field="eyeColor" label="Eye Color" />
				</Details>
			)
		}
	</SwapiServiceConsumer>
);

export const DetailsPlanet = ({ itemID }) => (
	<SwapiServiceConsumer>
		{
			({ getPlanet, getPlanetImage }) => (
				<Details
					getData={getPlanet}
					getImageURL={getPlanetImage}
					itemID={itemID}
				>
					<Record field="diameter" label="Diameter" />
					<Record field="population" label="Population" />
				</Details>
			)
		}
	</SwapiServiceConsumer>
);

export const DetailsStarship = ({ itemID }) => (
	<SwapiServiceConsumer>
		{
			({ getStarship, getStarshipImage }) => (
				<Details
					getData={getStarship}
					getImageURL={getStarshipImage}
					itemID={itemID}
				>
					<Record field="model" label="Model" />
					<Record field="length" label="Length" />
				</Details>
			)
		}
	</SwapiServiceConsumer>
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
