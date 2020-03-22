import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const PageLogin = ({ isLoggedIn, onLogin }) => {
	if (isLoggedIn) {
		return <Redirect to="/profile" />;
	}
	return (
		<div>
			<p>Please login to enter your profile.</p>
			<button
				type="button"
				onClick={onLogin}
			>
				Login
			</button>
		</div>
	);
};

PageLogin.propTypes = {
	'isLoggedIn': PropTypes.bool.isRequired,
	'onLogin': PropTypes.func.isRequired,
};
