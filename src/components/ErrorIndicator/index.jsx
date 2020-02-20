import React from 'react';
import styled from 'styled-components';
import { Flex } from '@primer/components';

const Header = styled.h4`
	font-size: 2rem;
	color: crimson;
	text-transform: uppercase;
`;

const ErrorIndicator = () => (
	<Flex flexDirection="column" alignItems="center" width="100%">
		<Header>Boom!</Header>
		<span>something went wrong</span>
		<span>(but we already sent droids to fix it)</span>
	</Flex>
);

export default ErrorIndicator;
