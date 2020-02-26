import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	Layout,
	List,
	Spin,
	Typography,
} from 'antd';
import SwapiService from '../../services/swapi';

const { Meta } = Card;
const { Title } = Typography;

class Details extends Component {
	swapiService = new SwapiService();

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
			<Layout>
				{loading
					? <Spin size="large" />
					: (
						<Card
							style={{ 'width': 300 }}
							cover={(
								<img
									src={`${image}`}
									alt={`${name}`}
								/>
							)}
						>
							<Meta
								title={<Title level={4}>{name}</Title>}
							/>
							<List>
								{
									Children.map(children, (child) => cloneElement(child, { item }))
								}
							</List>
						</Card>
					)}

			</Layout>
		);
	}
}

Details.propTypes = {
	'children': PropTypes.node.isRequired,
	'getData': PropTypes.func.isRequired,
	'getImageURL': PropTypes.func.isRequired,
	'itemID': PropTypes.string.isRequired,
};

export default Details;
