import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
  results: [],
  selectedPlace: null,
  loading: false,
  error: null,
  useMockData: false,
}

export const placeSearchSlice = createSlice({
  name: 'placeSearch',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setResults: (state, action) => {
      state.results = action.payload
    },
    setSelectedPlace: (state, action) => {
      state.selectedPlace = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setUseMockData: (state, action) => {
      state.useMockData = action.payload
    },
    clearResults: (state) => {
      state.results = []
      state.selectedPlace = null
    },
  },
})

export const { 
  setQuery, 
  setResults, 
  setSelectedPlace, 
  setLoading, 
  setError, 
  setUseMockData,
  clearResults 
} = placeSearchSlice.actions

// Async action for searching places
export const searchPlaces = (query) => async (dispatch, getState) => {
  dispatch(setLoading(true))
  dispatch(setError(null))
  
  try {
    const { useMockData } = getState().placeSearch
    
    if (useMockData) {
      // Use mock data
      const mockResults = [
        {
          id: '1',
          name: 'Empire State Building',
          address: '20 W 34th St, New York, NY 10001, USA',
          location: { lat: 40.7484405, lng: -73.9856644 }
        },
        {
          id: '2',
          name: 'Central Park',
          address: 'New York, NY, USA',
          location: { lat: 40.7812306, lng: -73.9667875 }
        },
        {
          id: '3',
          name: 'Times Square',
          address: 'Manhattan, NY 10036, USA',
          location: { lat: 40.7589638, lng: -73.9856964 }
        }
      ].filter(place => 
        place.name.toLowerCase().includes(query.toLowerCase()) ||
        place.address.toLowerCase().includes(query.toLowerCase())
      )
      
      dispatch(setResults(mockResults))
    } else {
      // In a real implementation, this would call the Google Places API
      // Example of how it would work with actual Google API:
      /*
      if (!window.google || !window.google.maps) {
        throw new Error('Google Maps API not loaded')
      }
      
      const service = new google.maps.places.AutocompleteService()
      const response = await new Promise((resolve, reject) => {
        service.getPlacePredictions({ input: query }, (predictions, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK || !predictions) {
            reject(new Error('Failed to fetch place predictions'))
          } else {
            resolve(predictions)
          }
        })
      })
      
      // Transform Google API response to our format
      const results = response.map(prediction => ({
        id: prediction.place_id,
        name: prediction.description,
        address: prediction.description,
        // Location would need to be fetched separately using PlacesService
      }))
      
      dispatch(setResults(results))
      */
      
      // For now, we'll simulate this with a delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Mock response structure similar to Google Places API
      const mockGoogleResults = [
        {
          id: '1',
          name: `${query} Location 1`,
          address: `123 ${query} Street, City, State`,
          location: { lat: 40.712776, lng: -74.005974 }
        },
        {
          id: '2',
          name: `${query} Location 2`,
          address: `456 ${query} Avenue, City, State`,
          location: { lat: 40.722776, lng: -74.015974 }
        }
      ]
      
      dispatch(setResults(mockGoogleResults))
    }
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}

export default placeSearchSlice.reducer
