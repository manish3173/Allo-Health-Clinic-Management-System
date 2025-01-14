import axios, { AxiosResponse } from 'axios';
import { Doctor } from '../types/doctor.types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

export const createAppointment = async (appointmentData: any) => {
  const response = await fetch('/api/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointmentData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create appointment');
  }
  
  return response.json();
};

export const getDoctors = (): Promise<AxiosResponse<Doctor[]>> => {
  return axios.get<Doctor[]>('/api/doctors');
}; 