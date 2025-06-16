import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Load stored user and token from localStorage on initial load
    const storedUser = localStorage.getItem('currentUser');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      try {
        setCurrentUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = (userData) => {
    const fakeToken = "fake-jwt-token"; // Dummy token
    setCurrentUser(userData);
    setToken(fakeToken);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    localStorage.setItem('token', fakeToken);
    console.log("User logged in:", userData, "Token:", fakeToken);
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ currentUser, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
