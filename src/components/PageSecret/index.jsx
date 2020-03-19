import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const PageSecret = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return (
			<div>This page is secret</div>
		);
	}

	return <Redirect to="/login" />;
};

PageSecret.propTypes = {
	'isLoggedIn': PropTypes.bool.isRequired,
};
