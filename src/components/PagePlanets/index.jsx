import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Row } from '../Row';
import { DetailsPlanet, ListPlanet } from '../SwComponents';

export const PagePlanets = withRouter(
	({ history, 'match': { 'params': { id = '2' } } }) => (
		<Row
			left={<ListPlanet onItemSelected={(itemID) => history.push(itemID)} />}
			right={<DetailsPlanet itemID={id} />}
		/>
	),
);

PagePlanets.propTypes = {
	'history': PropTypes.shape({
		'push': PropTypes.func,
	}).isRequired,
	// eslint-disable-next-line react/require-default-props
	'match': PropTypes.shape({
		'params': PropTypes.shape({
			'id': PropTypes.string,
		}),
	}),
};
