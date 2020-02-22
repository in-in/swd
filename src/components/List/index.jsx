import React, { Component } from 'react';
import { List as Ls, Spin } from 'antd';
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

	static renderItems(arr) {
		return arr.map(({ id, name }) => (
			<Ls.Item
				key={id}
			>{name}
			</Ls.Item>
		));
	}

	render() {
		const { peopleList } = this.state;
		const items = List.renderItems(peopleList);

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

export default List;
