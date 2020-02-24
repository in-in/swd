import React from 'react';
import PropTypes from 'prop-types';
import { Row as AntRow, Col } from 'antd';

const Row = ({ left, right }) => (
	<AntRow>
		<Col span={12}>{left}</Col>
		<Col span={12}>{right}</Col>
	</AntRow>
);

Row.propTypes = {
	'left': PropTypes.element.isRequired,
	'right': PropTypes.element.isRequired,
};

export default Row;
