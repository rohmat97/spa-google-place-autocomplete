import React from 'react'
import { Card, Space, Typography } from 'antd'
import Counter from '../components/Counter'
import DataDisplay from '../components/DataDisplay'

const { Title } = Typography

const Home = () => {
  return (
    <div>
      <Title level={2}>Home Page</Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card title="Welcome">
          <p>This is the home page of our Redux + Ant Design application.</p>
        </Card>
        
        <Card title="Redux Counter">
          <Counter title="Page-level Counter" />
        </Card>
        
        <Card title="Data Display">
          <DataDisplay />
        </Card>
      </Space>
    </div>
  )
}

export default Home
