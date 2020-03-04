import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import ErrorIndicator from '../components/ErrorIndicator';

const withData = (View) => class extends Component {
		// eslint-disable-next-line react/static-property-placement
		static propTypes = {
			'getData': PropTypes.func.isRequired,
		}

		constructor() {
			super();
			this.state = {
				'data': null,
				'error': false,
				'loading': true,
			};
		}

		componentDidMount() {
			const { getData } = this.props;

			this.setState({
				'loading': true,
				'error': false,
			});

			getData()
				.then((data) => {
					this.setState({
						data,
						'loading': false,
					});
				})
				.catch(() => {
					this.setState({
						'error': true,
						'loading': false,
					});
				});
		}

		render() {
			const { data, loading, error } = this.state;

			if (loading) {
				return <Spin />;
			}

			if (error) {
				return <ErrorIndicator />;
			}

			return <View {...this.props} data={data} />;
		}
};

export default withData;
