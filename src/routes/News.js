import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import Menus from '../components/Menu';
import { getTextById } from '../services/xiamiServer';

const { Header, Footer, Content } = Layout;

@connect(state => ({

}))
export default class News extends React.PureComponent {
  state = {
    news: {}
  }

  componentDidMount() {
    const param = this.props.location.search.split('=')[1];
    getTextById(param).then(res => {
      this.setState({
        news: res.data.content
      });
    });
  }

  render() {

    const { news } = this.state;

    return (
      <Layout style={{ backgroundColor: "#fff" }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#fff" }}>
          <div className="logo">
            <img style={{ float: "left", height: 60 }} src="../public/logo.png" alt="logo" />
          </div>

          <Menus />

        </Header>

        <Content style={{ padding: 70, marginTop: 30, minHeight: document.documentElement.clientHeight - 100 }}>
          <div style={{ width: '50%', margin: '0 auto' }} dangerouslySetInnerHTML={{__html: `<h1>${news.title}</h1>${news.text}`}}></div>
        </Content>

        <Footer >Xiami 2019</Footer>
      </Layout>
    )
  }
}
