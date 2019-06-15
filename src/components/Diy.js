import React from 'react';
import { Table, Divider, Tag } from 'antd';

export default class News extends React.PureComponent {

	state = {
		current: 'CPU',
		data: [],
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
				title: '类型',
				dataIndex: 'name',
				key: 'name',
				render: text => <a href="javascript:;">{text}</a>,
			},
			{
				title: '选中',
				dataIndex: 'age',
				key: 'age',
			},
			{
				title: 'Address',
				dataIndex: 'address',
				key: 'address',
			},
			{
				title: 'Tags',
				key: 'tags',
				dataIndex: 'tags',
				// render: tags => (
				// 	<span>
				// 		{tags.map(tag => {
				// 			let color = tag.length > 5 ? 'geekblue' : 'green';
				// 			if (tag === 'loser') {
				// 				color = 'volcano';
				// 			}
				// 			return (
				// 				<Tag color={color} key={tag}>
				// 					{tag.toUpperCase()}
				// 				</Tag>
				// 			);
				// 		})}
				// 	</span>
				// ),
			},
			{
				title: 'Action',
				key: 'action',
				render: (text, record) => (
					<span>
						<a href="javascript:;">Invite {record.name}</a>
						<Divider type="vertical" />
						<a href="javascript:;">Delete</a>
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
				<Table pagination={false} columns={columns} dataSource={this.state.template.map((e, index) => {
					return {
						key: String(index + 1),
						name: e.name,
					}
				})} />
			</div>
		)
	}
}