import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

import PagePeople from '../PagePeople';
import PagePlanets from '../PagePlanets';
import PageStarships from '../PageStarships';

const Wrapper = () => (
	<ErrorBoundary>
		<>
			<PagePeople />
			<PagePlanets />
			<PageStarships />
		</>
	</ErrorBoundary>
);

export default Wrapper;
