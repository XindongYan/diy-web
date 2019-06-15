import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Layout } from 'antd';
import News from '../components/News';
import Menus from '../components/Menu';

const { Header, Footer, Content } = Layout;


@connect(state => ({
  data: state.example.data,
  textArray: state.example.textArray,
  // carousel: state.example.carousel
}))

export default class Index extends React.PureComponent {
  state = {
    params: null,
    loading: false,
  }

  componentDidMount() {

  }

  render() {

    moment.locale('zh-cn');

    return (
      <Layout style={{ backgroundColor: "#fff" }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#fff" }}>
          <div className="logo">
            <img style={{ float: "left", height: 60 }} src="../public/logo.png" alt="logo" />
          </div>
          
          <Menus />

        </Header>

        <Content style={{ padding: 70, marginTop: 30, minHeight: document.documentElement.clientHeight - 100 }}>
          <News />
        </Content>

        <Footer >Xiami 2019</Footer>
      </Layout>
    )
  }
}
