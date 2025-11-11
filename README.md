# Single Page Application with Google Place Autocomplete Integration

This project demonstrates a scalable React application with Google Place Autocomplete integration, Redux state management, and Ant Design UI components.

## Features Implemented

- **Google Place Autocomplete**: Search for places with autocomplete suggestions
- **Redux State Management**: Using Redux Toolkit for efficient state management
- **Middleware**: Redux Thunk for handling asynchronous operations
- **UI Framework**: Ant Design components for a modern, responsive interface
- **Scalable Architecture**: Well-organized project structure for maintainability
- **Routing**: React Router for navigation between pages
- **Mock Data Fallback**: Built-in mock data system when Google API is unavailable

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/               # Page components
├── store/               # Redux store and slices
│   └── slices/          # Individual Redux slices
├── AppRouter.jsx        # Main router component
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Dependencies

- React & React DOM
- Redux & React-Redux
- Redux Toolkit
- Redux Thunk
- Ant Design
- React Router DOM

## Getting Started

1. Install dependencies: `pnpm install`
2. Start the development server: `pnpm dev`

## Redux Implementation

The Redux store is configured with:
- Redux Toolkit for simplified Redux setup
- Redux Thunk middleware for async operations
- Example slices for both synchronous and asynchronous state management
- Place search slice for managing place search state and results

## Ant Design Integration

Ant Design components are used throughout the application for:
- Layout components (Layout, Header, Content, Footer)
- UI elements (Buttons, Cards, Menus)
- Data display (Lists, Spinners, Alerts)
- Form elements and navigation

## Google Place Autocomplete Implementation

The application features a custom PlaceAutocomplete component that:
- Uses Ant Design's AutoComplete component for the UI
- Integrates with Redux for state management
- Supports both Google Places API and mock data fallback
- Provides real-time search suggestions as the user types

### Components

- `PlaceAutocomplete`: The main search component with autocomplete functionality
- `PlaceMap`: A component to display search results (placeholder for Google Maps integration)
- `placeSearchSlice`: Redux slice for managing place search state

### Features

- Real-time place suggestions as you type
- Toggle between Google API and mock data
- Loading states and error handling
- Responsive design with Ant Design components

### Google Places API Integration

To integrate with the actual Google Places API:

1. Obtain a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Places API in your Google Cloud project
3. Update the API key in `src/config/googleMaps.js`
4. Uncomment the Google API implementation in `src/store/slices/placeSearchSlice.js`
5. Add the Google Maps script to your `index.html` file

The current implementation includes commented code showing how to integrate with the actual Google Places API.

## Scalability Features

- Modular component structure
- Separation of concerns (components, pages, store)
- Reusable components
- Clear routing implementation
