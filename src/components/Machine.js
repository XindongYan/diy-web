import React from 'react';
import { Card, Menu, Table, Tag, message } from 'antd';
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
    products: [],
    localGoods: []
  }

  componentDidMount() {
    getGoods(this.state.current).then(res => {
      const localGoodsParse = JSON.parse(localStorage.getItem('goods'));
      this.setState({
        products: res.data,
        localGoods: localGoodsParse
      })
    })
  }

  handleClick = (info) => {
    // console.log(info.key)
    getGoods(info.key).then(res => {
      this.setState({
        products: res.data,
        current: info.key
      })
    })
  }

  cutGoods = (text, record) => {
    const localGoodsParse = JSON.parse(localStorage.getItem('goods'));
    const localGoods = [];

    for (const e of localGoodsParse) {
      if (e._id !== text._id) {
        localGoods.push(e);
      };
    };

    try {
      localStorage.setItem('goods', JSON.stringify(localGoods));
      this.setState({
        localGoods
      })
      message.success('删除成功');
    } catch (error) {
      message.error(error.message);
    };

  }

  addGoods = (text, record) => {
    const localGoodsParse = JSON.parse(localStorage.getItem('goods'));
    const localGoods = [];

    if (localGoodsParse) {
      for (const e of localGoodsParse) {
        if (e.type === text.type) {
          return null;
        } else {
          localGoods.push(e);
        };
      };
    }


    localGoods.push(text);

    try {
      localStorage.setItem('goods', JSON.stringify(localGoods));
      this.setState({
        localGoods
      })
      message.success('添加成功');
    } catch (error) {
      message.error(error.message);
    };

  }

  render() {
    const { current, template } = this.state;
    const goods = [];

    const localGoodsParse = JSON.parse(localStorage.getItem('goods'));
    if (localGoodsParse) {
      for (const e of localGoodsParse) {
        goods.push(e._id)
      }
    }

    const columns = [
      {
        title: '型号',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="">{text}</a>,
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
            {
              goods.indexOf(text._id) !== -1 ?
                <a onClick={e => this.cutGoods(text, record)}>{goods.indexOf(text._id) !== -1 ? '取消' : ''}</a> :
                <a onClick={e => this.addGoods(text, record)}>{goods.indexOf(text._id) !== -1 ? '' : '添加'}</a>
            }

          </span>
        ),
      },
    ];

    const { products } = this.state;

    return (
      <div>
        <Card style={{ minHeight: 970 }}>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="inline" style={{ width: 100, height: 0 }}>
            {template.map((e) => <Menu.Item key={e.name}>{e.name}</Menu.Item>)}
          </Menu>
          <Table style={{ width: '85%', marginLeft: 150 }} columns={columns} dataSource={products ? products : {}} />
        </Card>
      </div>
    )
  }
}
