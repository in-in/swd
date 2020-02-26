import React, { Component } from 'react';
import { Spin } from 'antd';

const withData = (View, getData) => class extends Component {
	constructor() {
		super();
		this.state = {
			'data': [],
		};
	}

	componentDidMount() {
		getData()
			.then((data) => {
				this.setState({
					data,
				});
			});
	}

	render() {
		const { data } = this.state;

		if (!data) {
			return <Spin />;
		}

		return <View {...this.props} data={data} />;
	}
};

export default withData;
