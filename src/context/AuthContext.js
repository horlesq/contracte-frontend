'use client'; // This context uses client-side hooks

import React, { useState, useEffect, createContext, useContext } from 'react';
import { api } from '../lib/api'; // Import your API client

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await api.post('/api/login', { email, password });
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('authUser', JSON.stringify(data.user));
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password, password_confirmation) => {
    setLoading(true);
    try {
      const data = await api.post('/api/register', { name, email, password, password_confirmation });
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('authUser', JSON.stringify(data.user));
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message || 'Registration failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      if (token) { // Only attempt logout API call if a token exists
        await api.post('/api/logout', {}, token);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
      setLoading(false);
    }
  };

  const getAuthHeaders = () => {
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, getAuthHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
