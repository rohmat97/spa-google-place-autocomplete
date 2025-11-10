import React from 'react'
import { Button, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/slices/exampleSlice'

const Counter = ({ title = "Counter" }) => {
  const dispatch = useDispatch()
  const value = useSelector(state => state.example.value)
  
  const handleIncrementByAmount = () => {
    const amount = parseInt(prompt('Enter amount to increment by:', '2'))
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount))
    }
  }
  
  return (
    <div>
      <h3>{title}</h3>
      <Space>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <span style={{ minWidth: '30px', textAlign: 'center' }}>{value}</span>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={handleIncrementByAmount}>+ Amount</Button>
      </Space>
    </div>
  )
}

export default Counter
