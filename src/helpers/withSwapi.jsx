import React from 'react';
import { SwapiServiceConsumer } from '../services/swapi-context';

const withSwapi = (mapMethodsToProps) => (Wrapped) => (props) => (
	<SwapiServiceConsumer>
		{
			(swapiService) => {
				const serviceProps = mapMethodsToProps(swapiService);

				return (
					<Wrapped {...props} {...serviceProps} />
				);
			}
		}
	</SwapiServiceConsumer>
);

export default withSwapi;
