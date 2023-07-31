import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import RootLayout from '../components/Layouts/RootLayout';
const { Header, Content, Footer } = Layout;
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">

      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight:"100vh",
          }}
        >
          
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}