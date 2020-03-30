import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography } from 'antd';

const { Item } = List;
const { Text } = Typography;

export const Record = ({ item, field, label }) => (
	<Item>
		<Text>{label}:&nbsp;</Text>
		<Text ellipsis>{item[field]}</Text>
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
