import React, { Component } from 'react';
import {
	createGlobalStyle,
	StyleSheetManager,
} from 'styled-components';


const ResetStyles = createGlobalStyle`
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		padding: 0;
		border: 0;
		white-space: nowrap;
		pointer-events: none;
	}

	*:focus {
		outline: none !important;
		box-shadow:
			0 0 0 0.125rem dodgerblue,
			0 0 0 0.375rem orangered !important;
	}
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			'data': 'Star Wars Depot',
		};
	}

	render() {
		const { data } = this.state;
		return (
			<StyleSheetManager disableVendorPrefixes>
				<>
					<ResetStyles />
					<div>{data}</div>
				</>
			</StyleSheetManager>
		);
	}
}

export default App;
