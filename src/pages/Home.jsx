import React from 'react'
import { Card, Space, Typography, Divider } from 'antd'
import Counter from '../components/Counter'
import DataDisplay from '../components/DataDisplay'
import PlaceAutocomplete from '../components/PlaceAutocomplete'
import PlaceMap from '../components/PlaceMap'

const { Title } = Typography

const Home = () => {
  return (
    <div>
      <Title level={2}>Place Search</Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card title="Search for Places">
          <p>Use the search box below to find places using Google Place Autocomplete.</p>
          <PlaceAutocomplete />
        </Card>
        
        <Card title="Place Locations">
          <PlaceMap />
        </Card>
        
        <Divider />
        
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
