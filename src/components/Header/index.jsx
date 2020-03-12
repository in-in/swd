import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row } from 'antd';
import { DropdownMenu } from '../DropdownMenu';

const { 'Header': AntHeader } = Layout;

const Header = () => (
	<AntHeader>
		<Row justify="space-between" align="middle">
			<Link to="/">SWD</Link>
			<DropdownMenu />
		</Row>
	</AntHeader>
);

export default Header;
