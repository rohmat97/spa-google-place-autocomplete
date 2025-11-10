import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import Home from './pages/Home'
import About from './pages/About'

const { Header, Content, Footer } = Layout

const AppRouter = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[{
              key: '1',
              label: <Link to="/">Home</Link>,
            }, {
              key: '2',
              label: <Link to="/about">About</Link>,
            }]}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: '24px 48px' }}>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 'calc(100vh - 134px)',
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Redux + Ant Design App ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Router>
  )
}

export default AppRouter
