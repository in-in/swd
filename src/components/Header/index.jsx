import React from 'react';
import { Layout, Row } from 'antd';
import { Logo } from '../Logo';
import { DropdownMenu } from '../DropdownMenu';

const { 'Header': AntHeader } = Layout;

const Header = () => (
	<AntHeader className="container">
		<Row justify="space-between" align="middle" style={{ 'height': '100%' }}>
			<Logo />
			<DropdownMenu />
		</Row>
	</AntHeader>
);

export default Header;
