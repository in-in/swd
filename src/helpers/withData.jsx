import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const withData = (View) => class extends Component {
		// eslint-disable-next-line react/static-property-placement
		static propTypes = {
			'getData': PropTypes.func.isRequired,
		}

		constructor() {
			super();
			this.state = {
				'data': null,
			};
		}

		componentDidMount() {
			const { getData } = this.props;

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
