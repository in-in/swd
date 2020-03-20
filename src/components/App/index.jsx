import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import { Wrapper } from '../Wrapper';
import 'antd/dist/antd.css';
import '../../styles/style.css';

export const App = () => (
	<ErrorBoundary>
		<Wrapper />
	</ErrorBoundary>
);
