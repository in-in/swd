import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Row } from '../Row';
import { DetailsStarship, ListStarship } from '../SwComponents';

export const PageStarships = withRouter(
	({ history, 'match': { 'params': { id = '15' } } }) => (
		<Row
			left={<ListStarship onItemSelected={(itemID) => history.push(itemID)} />}
			right={<DetailsStarship itemID={id} />}
		/>
	),
);

PageStarships.propTypes = {
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
