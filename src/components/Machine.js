import React from 'react';
import { Card, Menu, Table, Divider, Tag } from 'antd';
import { getGoods } from '../services/xiamiServer';

export default class News extends React.PureComponent {

	state = {
		current: 'CPU',
		template: [
      {
        id: '0',
        name: 'CPU',
        good: ''
      }, {
        id: '1',
        name: '主板',
        good: ''
      }, {
        id: '2',
        name: '内存',
        good: ''
      }, {
        id: '3',
        name: '硬盘',
        good: ''
      }, {
        id: '4',
        name: '固态',
        good: ''
      }, {
        id: '5',
        name: '显卡',
        good: ''
      }, {
        id: '6',
        name: '显示',
        good: ''
      }, {
        id: '7',
        name: '机箱',
        good: ''
      }, {
        id: '8',
        name: '电源',
        good: ''
      }, {
        id: '9',
        name: '散热',
        good: ''
      }, {
        id: '10',
        name: '鼠标',
        good: ''
      }, {
        id: '11',
        name: '键盘',
        good: ''
      }
    ],
	}

	componentDidMount() {
		getGoods(this.state.current).then(res => {
			console.log(res)
		})
	}

	handleClick = (info) => {
		// console.log(info.key)
		this.setState({
			current: info.key
		})
	}

	render() {
		const { current, template } = this.state;

		const columns = [
			{
				title: '型号',
				dataIndex: 'name',
				key: 'name',
				render: text => <a href="javascript:;">{text}</a>,
			},
			{
				title: '价格',
				dataIndex: 'age',
				key: 'age',
				render: text => <a href="">￥{text}</a>
			},
			{
				title: '图片',
				dataIndex: 'image',
				key: 'image',
			},
			{
				title: '标签',
				key: 'tags',
				dataIndex: 'tags',
				render: tags => (
					<span>
						{tags.map(tag => {
							let color = tag.length > 5 ? 'geekblue' : 'green';
							if (tag === 'loser') {
								color = 'volcano';
							}
							return (
								<Tag color={color} key={tag}>
									{tag.toUpperCase()}
								</Tag>
							);
						})}
					</span>
				),
			},
			{
				title: '操作',
				key: 'action',
				render: (text, record) => (
					<span>
						<a href="javascript:;">添加</a>
					</span>
				),
			},
		];
		
		const data = [
			{
				key: '1',
				name: 'John Brown',
				age: 32,
				address: 'New York No. 1 Lake Park',
				tags: ['nice', 'developer'],
			},
			{
				key: '2',
				name: 'Jim Green',
				age: 42,
				address: 'London No. 1 Lake Park',
				tags: ['loser'],
			},
			{
				key: '3',
				name: 'Joe Black',
				age: 32,
				address: 'Sidney No. 1 Lake Park',
				tags: ['cool', 'teacher'],
			},
		];

		return (
			<div>
				<Card style={{ height: 650 }}>
					<Menu onClick={this.handleClick} selectedKeys={[current]} mode="inline" style={{ width: 100, height: 0 }}>
						{template.map((e) => <Menu.Item key={e.name}>{e.name}</Menu.Item>)}
					</Menu>
					<Table style={{ width: '85%', marginLeft: 150 }} columns={columns} dataSource={data} />
				</Card>
			</div>
		)
	}
}