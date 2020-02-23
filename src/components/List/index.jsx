import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, List as Ls, Spin } from 'antd';
import SwapiService from '../../services/swapi';

class List extends Component {
	swapiService = new SwapiService();

	constructor() {
		super();
		this.state = {
			'peopleList': [],
		};
	}

	componentDidMount() {
		this.swapiService
			.getAllPeople()
			.then((peopleList) => {
				this.setState({
					peopleList,
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
		const { peopleList } = this.state;
		const items = this.renderItems(peopleList);

		if (!peopleList) {
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
};

export default List;
