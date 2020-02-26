import React from 'react';
import PropTypes from 'prop-types';
import { Button, List as Ls } from 'antd';
import withData from '../../helpers/withData';
import SwapiService from '../../services/swapi';

const { Item } = Ls;

const List = (props) => {
	const { children, data, onItemSelected } = props;

	const items = data.map((item) => {
		const { id } = item;
		const label = children(item);

		return (
			<Item key={id}>
				<Button
					block
					type="link"
					onClick={() => onItemSelected(id)}
				>{label}
				</Button>
			</Item>
		);
	});

	return (
		<Ls bordered>
			{items}
		</Ls>
	);
};

List.propTypes = {
	'children': PropTypes.func.isRequired,
	'data': PropTypes.arrayOf(PropTypes.object).isRequired,
	'onItemSelected': PropTypes.func.isRequired,
};

const { getAllPeople } = new SwapiService();

export default withData(List, getAllPeople);
