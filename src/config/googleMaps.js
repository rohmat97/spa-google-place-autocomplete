// Google Maps API Configuration

// In a production environment, you would set this via environment variables
// const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

// For demonstration purposes, we're using a placeholder
const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE'

export const GOOGLE_MAPS_CONFIG = {
  apiKey: API_KEY,
  libraries: ['places'],
  version: 'weekly',
}

// Function to load Google Maps script
export const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (window.google && window.google.maps) {
      resolve(window.google)
      return
    }
    
    // Check if script is already being loaded
    if (document.querySelector('script[src*="maps.googleapis.com"]]')) {
      // Wait for script to load
      window.initGoogleMaps = () => {
        resolve(window.google)
      }
      return
    }
    
    // Load script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initGoogleMaps`
    script.async = true
    script.defer = true
    script.onerror = reject
    
    window.initGoogleMaps = () => {
      resolve(window.google)
    }
    
    document.head.appendChild(script)
  })
}

export default GOOGLE_MAPS_CONFIG
