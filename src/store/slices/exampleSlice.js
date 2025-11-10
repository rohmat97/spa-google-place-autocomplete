import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  loading: false,
  error: null,
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, setLoading, setError } = exampleSlice.actions

export default exampleSlice.reducer
