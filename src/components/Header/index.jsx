import React from 'react';
import { Layout, Row } from 'antd';
import { Logo } from '../Logo';
import { DropdownMenu } from '../DropdownMenu';

const { 'Header': AntHeader } = Layout;

export const Header = () => (
	<AntHeader
		className="container"
		style={{ 'marginBottom': '2vw' }}
	>
		<Row
			justify="space-between"
			align="middle"
			style={{ 'height': '100%' }}
		>
			<Logo />
			<DropdownMenu />
		</Row>
	</AntHeader>
);
