import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from './logo.svg';

export const Logo = () => (
	<Link
		to="/"
		style={{
			'display': 'flex',
			'flexDirection': 'column',
			'alignItems': 'center',
		}}
	>
		<LogoIcon
			title="Star Wars Depot"
			style={{ 'width': '2em' }}
		/>
		<span style={{
			'lineHeight': '1.5',
			'fontWeight': 700,
		}}
		>SWD
		</span>
	</Link>
);
