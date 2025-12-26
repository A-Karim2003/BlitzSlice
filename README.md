# Fast React Pizza Co.

A modern pizza ordering application built with React, Redux Toolkit, and React Router.

## Features

- Browse pizza menu with detailed information
- Shopping cart with quantity management
- Geolocation-based address lookup
- Priority order option for faster delivery
- Responsive design for all devices
- Order tracking by order number
- Form validation for secure ordering

## Tech Stack

- **React 19** - UI library
- **Redux Toolkit** - State management
- **React Router v7** - Routing and navigation
- **Tailwind CSS v4** - Styling
- **React Toastify** - Toast notifications
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/A-Karim2003/BlitzSlice.git
cd BlitzSlice
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # Reusable UI components
├── features/          # Redux slices (user, cart)
├── pages/            # Route pages (Home, Menu, Cart, Order)
├── Services/         # API services
├── utils/            # Helper functions and validation
├── appLayout/        # App layout component
└── store.js          # Redux store configuration
```

## Key Features Explained

### Authentication Guard

Users must provide their name before accessing the menu and ordering features.

### Shopping Cart

- Add/remove items
- Adjust quantities
- Real-time price calculation
- Persistent cart state

### Order System

- Form validation
- Geolocation integration
- Priority delivery option (+20% fee)
- Order tracking and status updates

### Geolocation

Automatic address detection using the browser's geolocation API and reverse geocoding service.

### App images

![Home Page](/public/images//home.png)
![Menu Page](/public/images//menu.png)
![Order Page](/public/images//order.png)
