import React from 'react';
import { Layout } from 'antd';
import Machine from '../components/Machine';
import Menus from '../components/Menu';

const { Header, Footer, Content } = Layout;


export default class Index extends React.PureComponent {
  state = {
  }

  componentDidMount() {

  }

  render() {

    return (
      <Layout style={{ backgroundColor: "#fff" }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#fff" }}>
          <div className="logo">
            <img style={{ float: "left", height: 60 }} src="../public/logo.png" alt="logo" />
          </div>
          
          <Menus />

        </Header>

        <Content style={{ padding: 70, marginTop: 30, minHeight: document.documentElement.clientHeight - 100 }}>
          <Machine />
        </Content>

        <Footer >Xiami 2019</Footer>
      </Layout>
    )
  }
}
