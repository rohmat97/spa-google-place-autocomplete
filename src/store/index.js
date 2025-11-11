import { configureStore } from '@reduxjs/toolkit'

// Import reducers here
import exampleReducer from './slices/exampleSlice'
import asyncExampleReducer from './slices/asyncExampleSlice'
import placeSearchReducer from './slices/placeSearchSlice'

export const store = configureStore({
  reducer: {
    // Add reducers here
    example: exampleReducer,
    asyncExample: asyncExampleReducer,
    placeSearch: placeSearchReducer,
  },
  // Redux Toolkit includes Redux Thunk middleware by default
  // No need to manually configure middleware
})

// For TypeScript projects, you can define these types
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
