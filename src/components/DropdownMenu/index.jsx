import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const { Item } = Menu;

const menu = (
	<Menu>
		<Item key="people">
			<Link to="/people/">People</Link>
		</Item>
		<Item key="planets">
			<Link to="/planets/">Planets</Link>
		</Item>
		<Item key="starships">
			<Link to="/starships/">Starships</Link>
		</Item>
		<Item key="profile">
			<Link to="/profile">Profile</Link>
		</Item>
	</Menu>
);

export class DropdownMenu extends Component {
	constructor() {
		super();
		this.state = {
			'visible': false,
		};
	}

	handleVisibleChange = () => {
		this.setState(
			(state) => ({ 'visible': !state.visible }),
		);
	};

	render() {
		const { visible } = this.state;
		return (
			<Dropdown
				overlay={menu}
				trigger={['click']}
				placement="bottomRight"
				onVisibleChange={this.handleVisibleChange}
			>
				<Button>
					Menu {visible ? <CaretUpOutlined /> : <CaretDownOutlined />}
				</Button>
			</Dropdown>
		);
	}
}
