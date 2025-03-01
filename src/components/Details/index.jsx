import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	List,
	Spin,
	Typography,
} from 'antd';
import { ErrorBoundary } from '../ErrorBoundary';

const { Meta } = Card;
const { Title } = Typography;

export class Details extends Component {
	constructor() {
		super();
		this.state = {
			'image': null,
			'item': {},
			'loading': true,
		};
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		const { itemID } = this.props;
		if (itemID !== prevProps.itemID) {
			this.updateItem();
		}
	}

	updateItem() {
		const { getData, getImageURL, itemID } = this.props;

		if (!itemID) {
			return;
		}

		getData(itemID)
			.then((item) => {
				this.setState({
					'image': getImageURL(item),
					'loading': false,
					item,
				});
			});
	}

	render() {
		const {
			item,
			loading,
			image,
			'item': { name },
		} = this.state;

		const { children } = this.props;

		if (!item) {
			return <span>Select a item from a list</span>;
		}

		return (
			<ErrorBoundary>
				{loading
					? <Spin size="large" />
					: (
						<Card
							bordered={false}
							bodyStyle={{
								'paddingLeft': '1em',
								'paddingRight': '1em',
							}}
							cover={(
								<img
									src={`${image}`}
									alt={`${name}.`}
								/>
							)}
						>
							<Meta
								title={<Title level={2} ellipsis>{name}</Title>}
							/>
							<List
								dataSource={children}
								renderItem={(child) => cloneElement(child, { item })}
							/>
						</Card>
					)}
			</ErrorBoundary>
		);
	}
}

Details.propTypes = {
	'children': PropTypes.node.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
	'itemID': PropTypes.string.isRequired,
};
