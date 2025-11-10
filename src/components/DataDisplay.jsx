import React from 'react'
import { Button, Spin, Alert, List } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../store/slices/asyncExampleSlice'

const DataDisplay = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.asyncExample)
  
  const handleFetchData = () => {
    dispatch(fetchData())
  }
  
  return (
    <div>
      <h3>Data Display</h3>
      <Button onClick={handleFetchData} loading={loading}>
        Fetch Data
      </Button>
      
      {loading && <Spin tip="Loading..." style={{ display: 'block', margin: '20px 0' }} />}
      
      {error && <Alert message="Error" description={error} type="error" showIcon style={{ margin: '20px 0' }} />}
      
      {data.length > 0 && (
        <div style={{ margin: '20px 0' }}>
          <h4>Fetched Data:</h4>
          <List
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                {item.name}
              </List.Item>
            )
          }
        />
      </div>
      )}
    </div>
  )
}

export default DataDisplay
