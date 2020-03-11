import React from 'react';
import { Typography } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AlertOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ErrorIndicator = () => (
	<>
		<AlertOutlined type="alert" theme="twoTone" style={{ 'fontSize': '3em' }} />
		<Title level={4}>Boom!</Title>
		<span>something went wrong</span>
		<span>(but we already sent droids to fix it)</span>
	</>
);

export default ErrorIndicator;
