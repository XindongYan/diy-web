import React from 'react';
import { Menu, Tag } from 'antd';
import { connect } from 'dva'
import { routerRedux } from 'dva/router';

@connect(state => ({
}))

export default class Menus extends React.PureComponent {

	handleClick = (e) => {
		console.log(e.key)
		this.props.dispatch(routerRedux.push(`/${e.key}`));
	}

	render() {

		return (
			<Menu
				theme="light"
				mode="horizontal"
				defaultSelectedKeys={['List']}
				onClick={this.handleClick}
				style={{ lineHeight: '64px' }}
			// onClick={e => this.itemChange(e)}
			>
				<Menu.Item key="icon">
					<Tag color="cyan">攒机</Tag>
				</Menu.Item>
				<Menu.Item key="machine">
					配件
            </Menu.Item>
				<Menu.Item key="diy">
					攒机
            </Menu.Item>
				<Menu.Item key="game">
					游戏
            </Menu.Item>
				<Menu.Item key="me">
					我的
            </Menu.Item>
			</Menu>
		)
	}
}