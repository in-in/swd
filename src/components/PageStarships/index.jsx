import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListStarship } from '../SwComponents';

const PageStarships = ({ history }) => (
	<ListStarship onItemSelected={(itemID) => history.push(itemID)} />
);

PageStarships.propTypes = {
	'history': PropTypes.shape({
		'push': PropTypes.func,
	}).isRequired,
};

export default withRouter(PageStarships);
