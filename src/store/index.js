import { configureStore } from '@reduxjs/toolkit'

// Import reducers here
import placeSearchReducer from './slices/placeSearchSlice'

export const store = configureStore({
  reducer: {
    placeSearch: placeSearchReducer,
  },
  // Redux Toolkit includes Redux Thunk middleware by default
  // No need to manually configure middleware
});

// For TypeScript projects, you can define these types
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
