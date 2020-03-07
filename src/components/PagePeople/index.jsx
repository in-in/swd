import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Row from '../Row';
import { DetailsPerson, ListPerson } from '../SwComponents';

const PagePeople = ({ history, 'match': { 'params': { id = '1' } } }) => (
	<Row
		left={<ListPerson onItemSelected={(itemID) => history.push(itemID)} />}
		right={<DetailsPerson itemID={id} />}
	/>
);

PagePeople.propTypes = {
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

export default withRouter(PagePeople);
