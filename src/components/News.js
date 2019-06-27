import React from 'react';
import { Carousel, Card, List, Tag, Modal, message } from 'antd';
import { connect } from 'dva';
import { getText } from '../services/xiamiServer';
import { routerRedux } from 'dva/router';
const { Meta } = Card;

@connect(state => ({
  data: state.example.data
}))
export default class News extends React.PureComponent {

  state = {
    carouselNews: [],
    news: [],
    visible: false,
    detail: ''
  }

  componentDidMount() {
    getText(0).then(res => {
      getText(1).then(rs => {
        if (!res || !res.data) {
          message.warn('检查网络')
          return false
        }
        this.setState({
          carouselNews: rs.data.result,
          news: res.data.result
        })
      })

    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  Detail = (item) => {
    this.props.dispatch(routerRedux.push(`/news?q=${item}`));
  }

  render() {

    const { news, detail, carouselNews } = this.state;

    return (
      <div>
        <Carousel autoplay style={{ textAlign: 'center', height: '160px', lineHeight: '160px', background: '#364d79', overflow: 'hidden' }}>

          {carouselNews.map((c) => {
            return <Card
              onClick={e => this.Detail(c._id)}
              hoverable
              style={{ width: 240, height: 500 }}
              cover={<img alt='example' src={`http://127.0.0.1:3000${c.mainImg}`} style={{ height: 500 }} />}
            >
              <Meta title={c.title} />
            </Card>
          })}
        </Carousel>

        <Tag color='#FF6600' style={{ height: 30, width: 80, fontSize: 15, paddingTop: 5, margin: '36px 0' }}>为您推荐</Tag>

        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={news}
          renderItem={(item, index) => (
            <List.Item>
              <a onClick={e => this.Detail(item._id)}>
                <Card key={index} style={{ borderRadius: 8, background: '#F5F5F5', border: 0, height: 120 }}>
                  <img style={{ width: 100, borderRadius: 8, marginRight: 20 }} src={`http://127.0.0.1:3000${item.mainImg}`} alt="img" />
                  {item.title}
                </Card>
              </a>
            </List.Item>
          )}
        />
        <Modal
          title={detail.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{ overflow: 'hidden' }}
          width={690}
        >
          <div id='text'></div>

          <script>
            {
              document.getElementById('text') ?
                document.getElementById('text').innerHTML = detail.text :
                null
            }
          </script>
        </Modal>
      </div>
    )
  }
}
