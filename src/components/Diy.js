import React from 'react';
import { Table, Tag, message } from 'antd';

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
    localGoods: []
	}

	componentDidMount() {
    const localGoodsParse = JSON.parse(localStorage.getItem('goods'));
    this.setState({
      localGoods: localGoodsParse
    })
	}

	handleClick = (info) => {
		// console.log(info.key)
		this.setState({
			current: info.key
		})
  }

  cutGoods = (info) => {
    const localGoodsParse = JSON.parse(localStorage.getItem('goods'));
    const goods = [];

    for (const e of localGoodsParse) {
      if (e._id !== info._id) {
        goods.push(e);
      };
    };

    try {
      localStorage.setItem('goods', JSON.stringify(goods));
      this.setState({
        localGoods: goods
      })
      message.success('移除成功')
    } catch (error) {
      message.error(error.message)
    }
  }

	render() {
		const localGoodsParse = JSON.parse(localStorage.getItem('goods'));

		const columns = [
			{
				title: '类型',
				dataIndex: 'name',
				key: 'name',
				render: text => <a href="">{text}</a>,
      },
			{
				title: '型号',
				dataIndex: 'title',
				key: 'title',
      },
      {
				title: '价格',
				dataIndex: 'price',
				key: 'price',
				render: text => <a href="" style={{ color: '#DC143C', fontWeight: 'bold' }}>￥{text}</a>
			},
      {
        title: '图片',
        dataIndex: 'img',
        key: 'img',
        render: text => <img src={`http://127.0.0.1:3000${text}`} style={{ width: 100 }} alt='img' />
      },
			{
				title: '标签',
				key: 'params',
				dataIndex: 'params',
				render: tags => (
					<span>
						{tags.map(tag => {
							let color = 'geekblue';
							if (tag === 'loser') {
								color = 'volcano';
							}
							return (
								<Tag color={color} key={tag.name}>
									{`${tag.name}: ${tag.value}`}
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
						<a href="" onClick={e => this.cutGoods(text)}>移除</a>
					</span>
				),
			},
		];

    console.log(localGoodsParse)

		return (
			<div>
				<Table pagination={false} columns={columns} dataSource={localGoodsParse.map((e, index) => {
					return {
            key: String(index + 1),
            _id: e._id,
            name: e.type,
            price: e.price,
            title: e.name,
            img: e.img,
            params: e.params
					}
				})} />
			</div>
		)
	}
}
