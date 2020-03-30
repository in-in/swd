import React from 'react';
import { Typography, Result } from 'antd';

const { Title, Paragraph } = Typography;

export const ErrorIndicator = () => (
	<>
		<Result
			status="warning"
			title={(
				<Title level={2}>Achtung!</Title>
			)}
			subTitle={(
				<>
					<Paragraph strong type="warning">Something went wrong</Paragraph>
					<Paragraph type="secondary"> (but we already sent droids <span role="img" aria-label="Robot">🤖</span> to fix it)</Paragraph>
				</>
			)}
		/>
	</>
);
