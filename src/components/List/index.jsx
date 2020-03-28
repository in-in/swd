import React from 'react';
import PropTypes from 'prop-types';
import { List as Ls, Button } from 'antd';
import { ErrorBoundary } from '../ErrorBoundary';
import s from './style.module.css';

const { Item } = Ls;

export const List = (props) => {
	const { children, data, onItemSelected } = props;

	const createItem = (item) => {
		const { id } = item;
		const label = children(item);

		return (
			<Item
				key={id}
				onClick={() => onItemSelected(id)}
			>
				<Button
					block
					className={s.list__button}
					type="link"
				>{label}
				</Button>

			</Item>
		);
	};

	return (
		<ErrorBoundary>
			<Ls
				dataSource={data}
				renderItem={(item) => createItem(item)}
			/>
		</ErrorBoundary>
	);
};

List.propTypes = {
	'children': PropTypes.func.isRequired,
	'data': PropTypes.arrayOf(PropTypes.object).isRequired,
	'onItemSelected': PropTypes.func.isRequired,
};
