/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	{
		0% { transform: rotate(0deg) }
		50% { transform: rotate(180deg) }
		100% { transform: rotate(360deg);  }
	}
`;

const StyledSpinner = styled.div`
	width: 100px;
	height: 100px;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
`;

const StyledSpinnerInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;

	div {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		transform-origin: center;
		box-sizing: border-box;
		border-radius: 50%;
		box-shadow: inset 0 4px 0 0 dodgerblue;
		animation: ${spin} 1.5s linear infinite;
	}
`;

const Spinner = () => (
	<StyledSpinner>
		<StyledSpinnerInner>
			<div />
		</StyledSpinnerInner>
	</StyledSpinner>
);

export default Spinner;
