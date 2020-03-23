import React from 'react';
import PropTypes from 'prop-types';
import { List as Ls } from 'antd';
import { ErrorBoundary } from '../ErrorBoundary';

const { Item } = Ls;

export const List = (props) => {
	const { children, data, onItemSelected } = props;

	const items = data.map((item) => {
		const { id } = item;
		const label = children(item);

		return (
			<Item
				key={id}
				onClick={() => onItemSelected(id)}
				style={{ 'cursor': 'pointer' }}
			>
				{label}
			</Item>
		);
	});

	return (
		<ErrorBoundary>
			<Ls>
				{items}
			</Ls>
		</ErrorBoundary>
	);
};

List.propTypes = {
	'children': PropTypes.func.isRequired,
	'data': PropTypes.arrayOf(PropTypes.object).isRequired,
	'onItemSelected': PropTypes.func.isRequired,
};
