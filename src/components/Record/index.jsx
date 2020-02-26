import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

const { Item } = List;

const Record = ({ item, field, label }) => (
	<Item>
		<span>{label}</span>
		<span>{item[field]}</span>
	</Item>
);

Record.propTypes = {
	'field': PropTypes.string.isRequired,
	'label': PropTypes.string.isRequired,
	'item': PropTypes.objectOf(PropTypes.string),
};

Record.defaultProps = {
	'item': {},
};

export default Record;
