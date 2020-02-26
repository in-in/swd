import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

const { Item } = List;

const Record = ({ field, label }) => (
	<Item>
		<span>{`${field}:`}</span>
		<span>{label}</span>
	</Item>
);

Record.propTypes = {
	'field': PropTypes.string.isRequired,
	'label': PropTypes.string.isRequired,
};

export default Record;
