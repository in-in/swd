import React from 'react';

export const withChildFunction = (fn) => (
	Wrapped,
) => (props) => <Wrapped {...props}>{fn}</Wrapped>;
