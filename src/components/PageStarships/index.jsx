import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Row from '../Row';
import { DetailsStarship, ListStarship } from '../SwComponents';

const PageStarships = ({ history, 'match': { 'params': { id = '15' } } }) => (
	<Row
		left={<ListStarship onItemSelected={(itemID) => history.push(itemID)} />}
		right={<DetailsStarship itemID={id} />}
	/>
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

export default withRouter(PageStarships);
