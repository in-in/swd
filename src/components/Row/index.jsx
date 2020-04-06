import React from 'react';
import PropTypes from 'prop-types';
import { Row as AntRow, Col } from 'antd';

export const Row = ({ left, right }) => (
	<AntRow gutter={[
		{ 'md': 24 },
		{ 'xs': 24, 'sm': 24, 'md': 0 },
	]}
	>
		<Col xs={24} md={12}>{left}</Col>
		<Col xs={24} md={12}>{right}</Col>
	</AntRow>
);

Row.propTypes = {
	'left': PropTypes.element.isRequired,
	'right': PropTypes.element.isRequired,
};
