/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Item } = Menu;
const { 'Header': AntHeader } = Layout;

class Header extends Component {
	render() {
		return (
			<AntHeader>
				<Menu mode="horizontal">
					<Item key="people">
						<Link to="/people">People</Link>
					</Item>
					<Item key="planets">
						<Link to="/planets">Planets</Link>
					</Item>
					<Item key="starships">
						<Link to="/starships">Starships</Link>
					</Item>
				</Menu>
			</AntHeader>
		);
	}
}

export default Header;
