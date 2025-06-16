# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Airbnb Clone Frontend

This project is a frontend clone of Airbnb, built using React and Vite. It demonstrates several features including component-based UI, simulated user authentication, and interactive search functionality.

## Features Implemented

### 1. User Interface Components
- **Navbar:** Includes navigation links, a user profile section, and a multi-input search bar for destinations, check-in/out dates, and guests.
- **Footer:** Basic footer for the application.
- **Login/Signup Forms:** Modal-like forms for user registration and login.

### 2. Simulated JWT Authentication
- **Authentication Flow:**
    - Users can click the profile icon to open a dropdown menu with "Login" and "Sign Up" options.
    - Clicking these options opens respective forms.
    - Upon "successful" login (currently, any non-empty email/password in the login form):
        - A dummy JWT token (`fake-jwt-token`) and user information (email) are stored in `localStorage`.
        - The UI updates to show a welcome message and a "Logout" button.
    - The "Logout" button clears the token and user information from `localStorage` and reverts the UI to the pre-login state.
- **State Management:** Authentication state (current user, token) is managed globally using React's Context API (`AuthContext`).
- **No Backend:** The authentication is entirely client-side simulated. No actual backend API calls are made, and no real JWTs are generated or validated beyond the dummy implementation.

### 3. Interactive Search Bar
- The search bar in the Navbar allows users to input:
    - Destination
    - Check-in date
    - Check-out date
    - Number of guests
- Clicking the search button logs these parameters to the browser's console. This is a placeholder for future integration with a search API.

## Getting Started

### Prerequisites
- Node.js (v18.x or later recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd airbnclone
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   # yarn install
   ```

### Running the Development Server
To run the application in development mode:
```bash
npm run dev
# or
# yarn dev
```
This will start the Vite development server, typically at `http://localhost:5173`. The application will automatically reload if you change any of the source files.

### Building for Production
To create a production build:
```bash
npm run build
# or
# yarn build
```
This will create an optimized static build of the application in the `dist` folder.

### Linting
To run the ESLint linter:
```bash
npm run lint
# or
# yarn lint
```

## Dependencies
- React
- React DOM
- Vite (build tool)
- Tailwind CSS (utility-first CSS framework)
- ESLint (linter)

The authentication logic uses React's built-in Context API for state management. No external libraries for JWT handling (like `jwt-decode` or `jsonwebtoken`) have been added for the simulated authentication.
