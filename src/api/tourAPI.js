// src/api/tourAPI.js
import axios from 'axios';

// Set the base URL from Vite's environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const tourAPI = {
  // Fetch all tours
  fetchTours: async () => {
    const response = await axios.get(`${API_BASE_URL}/api/tours`);
    return response.data;
  },

  // Fetch a specific tour by ID
  fetchTourById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/api/tours/${id}`);
    return response.data;
  },

  // Create a new tour
  createTour: async (tourData) => {
    const response = await axios.post(`${API_BASE_URL}/api/tours`, tourData);
    return response.data;
  },

  // Update a tour by ID
  updateTour: async (id, tourData) => {
    const response = await axios.put(`${API_BASE_URL}/api/tours/${id}`, tourData);
    return response.data;
  },

  // Delete a tour by ID
  deleteTour: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/api/tours/${id}`);
    return response.data;
  },
};

export default tourAPI;
