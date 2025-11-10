# React + Redux + Ant Design Application

This project demonstrates a scalable React application with Redux state management and Ant Design UI components.

## Features Implemented

- **Redux State Management**: Using Redux Toolkit for efficient state management
- **Middleware**: Redux Thunk for handling asynchronous operations
- **UI Framework**: Ant Design components for a modern, responsive interface
- **Scalable Architecture**: Well-organized project structure for maintainability
- **Routing**: React Router for navigation between pages

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

## Ant Design Integration

Ant Design components are used throughout the application for:
- Layout components (Layout, Header, Content, Footer)
- UI elements (Buttons, Cards, Menus)
- Data display (Lists, Spinners, Alerts)
- Form elements and navigation

## Scalability Features

- Modular component structure
- Separation of concerns (components, pages, store)
- Reusable components
- Clear routing implementation
