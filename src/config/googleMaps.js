// Google Maps Places API configuration

// In production, load this from an environment variable instead of hardcoding
// const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const GOOGLE_MAPS_API_KEY = "AIzaSyAcSqvUzuAcsjWgyRaw5iioESBwKdV_Xls";

export const GOOGLE_MAPS_CONFIG = {
  apiKey: GOOGLE_MAPS_API_KEY,
  // Local proxy endpoint (Vite dev server) for Places Text Search
  placesTextSearchEndpoint: "/api/google-places",
};

export default GOOGLE_MAPS_CONFIG;
