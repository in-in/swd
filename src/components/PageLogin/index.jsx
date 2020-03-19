import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const PageLogin = ({ isLoggedIn, onLogin }) => {
	if (isLoggedIn) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<p>Login to see secret page</p>
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
