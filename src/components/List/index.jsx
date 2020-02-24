import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, List as Ls, Spin } from 'antd';

const { Item } = Ls;

class List extends Component {
	constructor() {
		super();
		this.state = {
			'itemList': [],
		};
	}

	componentDidMount() {
		const { getData } = this.props;

		getData()
			.then((itemList) => {
				this.setState({
					itemList,
				});
			});
	}

	renderItems(arr) {
		const { onItemSelected, renderItem } = this.props;

		return arr.map((item) => {
			const { id } = item;
			const label = renderItem(item);

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
	}

	render() {
		const { itemList } = this.state;
		const items = this.renderItems(itemList);

		if (!itemList) {
			return <Spin />;
		}

		return (
			<Ls bordered>
				{items}
			</Ls>
		);
	}
}

List.propTypes = {
	'getData': PropTypes.func.isRequired,
	'onItemSelected': PropTypes.func.isRequired,
	'renderItem': PropTypes.func.isRequired,
};

export default List;
