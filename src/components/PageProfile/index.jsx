import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Result } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SmileOutlined } from '@ant-design/icons';

export const PageProfile = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return (
			<Result
				icon={<SmileOutlined />}
				title="Great, welcome to your profile!"
			/>
		);
	}

	return <Redirect to="/login" />;
};

PageProfile.propTypes = {
	'isLoggedIn': PropTypes.bool.isRequired,
};
