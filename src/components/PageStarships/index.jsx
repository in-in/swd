import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Typography } from 'antd';
import { Row } from '../Row';
import { DetailsStarship, ListStarship } from '../SwComponents';

const { Title } = Typography;

export const PageStarships = withRouter(
	({ history, 'match': { 'params': { id = '15' } } }) => (
		<>
			<Title level={1}>Starships in Star Wars Depot</Title>
			<Row
				left={<ListStarship onItemSelected={(itemID) => history.push(itemID)} />}
				right={<DetailsStarship itemID={id} />}
			/>
		</>
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
