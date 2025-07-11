// lib/api.js
// This is a simple API client. In a larger app, you might use Axios or a more robust solution.

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'; // Ensure this matches your Laravel backend URL

export const api = {
  get: async (path, token = null) => {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_BASE_URL}${path}`, { headers });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API GET request failed for ${path}`);
    }
    return response.json();
  },

  post: async (path, data, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API POST request failed for ${path}`);
    }
    return response.json();
  },

  put: async (path, data, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API PUT request failed for ${path}`);
    }
    return response.json();
  },

  delete: async (path, token = null) => {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API DELETE request failed for ${path}`);
    }
    return response.json();
  },
};
