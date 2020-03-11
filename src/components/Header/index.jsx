import React from 'react';
import { Link } from 'react-router-dom';
import {
	Layout, Menu, Row, Col,
} from 'antd';

const { Item } = Menu;
const { 'Header': AntHeader } = Layout;

const Header = () => (
	<AntHeader>
		<Row justify="space-between" align="bottom">
			<Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4}>
				<Link to="/">SWD</Link>
			</Col>
			<Col xs={0} sm={0} md={18} lg={18} xl={19} xxl={20}>
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
			</Col>
		</Row>
	</AntHeader>
);

export default Header;
