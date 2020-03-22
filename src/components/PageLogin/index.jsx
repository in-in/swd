import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
	Form, Input, Button, Checkbox,
} from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Item } = Form;

export const PageLogin = ({ isLoggedIn, onLogin }) => {
	if (isLoggedIn) {
		return <Redirect to="/profile" />;
	}
	return (
		<Form
			name="normal_login"
			initialValues={{ 'remember': true }}
			wrapperCol={{
				'sm': { 'span': 10, 'offset': 7 },
				'xl': { 'span': 6, 'offset': 9 },
			}}
			onFinish={onLogin}
		>
			<Item
				name="username"
				rules={[{ 'required': true, 'message': 'Please input your Username!' }]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
			</Item>
			<Item
				name="password"
				rules={[{ 'required': true, 'message': 'Please input your Password!' }]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Item>
			<Item>
				<Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Item>
			</Item>

			<Item>
				<Button
					htmlType="submit"
					type="primary"
				>
					Log in
				</Button>
			</Item>
		</Form>
	);
};

PageLogin.propTypes = {
	'isLoggedIn': PropTypes.bool.isRequired,
	'onLogin': PropTypes.func.isRequired,
};
