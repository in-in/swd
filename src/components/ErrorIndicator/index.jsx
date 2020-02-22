import React from 'react';
import { Icon, Typography } from 'antd';

const { Title } = Typography;

const ErrorIndicator = () => (
	<>
		<Icon type="alert" theme="twoTone" style={{ 'fontSize': '3em' }} />
		<Title level={4}>Boom!</Title>
		<span>something went wrong</span>
		<span>(but we already sent droids to fix it)</span>
	</>
);

export default ErrorIndicator;
