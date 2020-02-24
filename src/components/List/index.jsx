import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, List as Ls, Spin } from 'antd';

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
		const { onItemSelected } = this.props;
		return arr.map(({ id, name }) => (
			<Ls.Item key={id}>
				<Button
					block
					type="link"
					onClick={() => onItemSelected(id)}
				>{name}
				</Button>
			</Ls.Item>
		));
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
	'onItemSelected': PropTypes.func.isRequired,
	'getData': PropTypes.func.isRequired,
};

export default List;
