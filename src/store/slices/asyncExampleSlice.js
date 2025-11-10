import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const asyncExampleSlice = createSlice({
  name: 'asyncExample',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    fetchDataFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = asyncExampleSlice.actions

// Async action using Redux Thunk
export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataStart())
  try {
    // Simulate API call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
          ],
        })
      }, 1000)
    })
    dispatch(fetchDataSuccess(response.data))
  } catch (error) {
    dispatch(fetchDataFailure(error.message))
  }
}

export default asyncExampleSlice.reducer
