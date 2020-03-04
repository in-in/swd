import React from 'react';
import { SwapiServiceConsumer } from '../services/swapi-context';

const withSwapi = (Wrapped) => (props) => (
	<SwapiServiceConsumer>
		{
			(swapiService) => (
				<Wrapped {...props} swapiService={swapiService} />
			)
		}
	</SwapiServiceConsumer>
);

export default withSwapi;
