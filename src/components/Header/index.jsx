/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';

const { Item } = Menu;
const { 'Header': AntHeader } = Layout;

class Header extends Component {
	render() {
		return (
			<AntHeader>
				<Row style={{ 'display': 'flex' }}>
					<Link to="/">SWD</Link>
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
				</Row>
			</AntHeader>
		);
	}
}

export default Header;
