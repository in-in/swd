import React from 'react';
import { Link } from 'react-router-dom';
import {
	Layout, Menu, Row, Col,
} from 'antd';

const { Item } = Menu;
const { 'Header': AntHeader } = Layout;

const Header = () => (
	<AntHeader>
		<Row justify="space-between" align="middle">
			<Col xs={24} sm={24} md={3}>
				<Link to="/">SWD</Link>
			</Col>
			<Col xs={0} sm={0} md={16}>
				<Menu
					mode="horizontal"
					theme="dark"
					style={{
						'display': 'flex',
						'justifyContent': 'flex-end',
					}}
				>
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
			</Col>
		</Row>
	</AntHeader>
);

export default Header;
