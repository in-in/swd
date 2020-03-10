import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';

const { Item } = Menu;
const { 'Header': AntHeader } = Layout;

const Header = () => (
	<AntHeader>
		<Row style={{ 'display': 'flex' }}>
			<Link to="/">SWD</Link>
			<Menu mode="horizontal">
				<Item key="people">
					<Link to="/people/">People</Link>
				</Item>
				<Item key="planets">
					<Link to="/planets/">Planets</Link>
				</Item>
				<Item key="starships">
					<Link to="/starships/">Starships</Link>
				</Item>
				<Item key="login">
					<Link to="/login">Login</Link>
				</Item>
				<Item key="secret">
					<Link to="/secret">Secret</Link>
				</Item>
			</Menu>
		</Row>
	</AntHeader>
);

export default Header;
