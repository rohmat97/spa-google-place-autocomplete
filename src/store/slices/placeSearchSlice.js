import { createSlice } from "@reduxjs/toolkit";
import { GOOGLE_MAPS_CONFIG } from "../../config/googleMaps";

const initialState = {
  query: "",
  results: [],
  selectedPlace: null,
  loading: false,
  error: null,
};

export const placeSearchSlice = createSlice({
  name: "placeSearch",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setSelectedPlace: (state, action) => {
      state.selectedPlace = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUseMockData: (state, action) => {
      state.useMockData = action.payload;
    },
    clearResults: (state) => {
      state.results = [];
      state.selectedPlace = null;
    },
  },
});

export const {
  setQuery,
  setResults,
  setSelectedPlace,
  setLoading,
  setError,
  setUseMockData,
  clearResults,
} = placeSearchSlice.actions;

// Async action for searching places
export const searchPlaces = (query) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    // Call Google Places Text Search API with fallback to simulated data
    try {
      const params = new URLSearchParams({
        key: GOOGLE_MAPS_CONFIG.apiKey,
        query,
      });

      // Use Vite proxy to avoid CORS: this hits `/api/google-places` locally,
      // which the dev server forwards to
      // `https://maps.googleapis.com/maps/api/place/textsearch/json`.
      const response = await fetch(
        `${GOOGLE_MAPS_CONFIG.placesTextSearchEndpoint}?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error(`Places API HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (
        data.status &&
        data.status !== "OK" &&
        data.status !== "ZERO_RESULTS"
      ) {
        throw new Error(data.error_message || data.status);
      }

      const rawResults = Array.isArray(data.results) ? data.results : [];

      const results = rawResults.map((place, index) => ({
        id: place.place_id || String(index),
        name: place.name || "",
        address: place.formatted_address || place.vicinity || "",
        location:
          place.geometry && place.geometry.location
            ? {
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
              }
            : undefined,
      }));

      dispatch(setResults(results));
    } catch (apiError) {
      console.error(
        "Google Places API failed, falling back to simulated data:",
        apiError
      );

      const fallbackResults = [
        {
          id: "1",
          name: `${query} Location 1`,
          address: `123 ${query} Street, City, State`,
          location: { lat: 40.712776, lng: -74.005974 },
        },
        {
          id: "2",
          name: `${query} Location 2`,
          address: `456 ${query} Avenue, City, State`,
          location: { lat: 40.722776, lng: -74.015974 },
        },
      ];

      dispatch(setResults(fallbackResults));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default placeSearchSlice.reducer;
