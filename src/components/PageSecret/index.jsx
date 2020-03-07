import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const PageSecret = ({ isLoggedIn }) => {
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

export default PageSecret;
