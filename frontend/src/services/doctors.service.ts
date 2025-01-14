import api from './api';
import { Doctor } from '../types/doctor.types';

export const doctorsService = {
  async getAllDoctors(): Promise<Doctor[]> {
    const { data } = await api.get<Doctor[]>('/doctors');
    return data;
  },

  async getDoctor(id: number): Promise<Doctor> {
    const { data } = await api.get<Doctor>(`/doctors/${id}`);
    return data;
  },

  async createDoctor(doctorData: Partial<Doctor>): Promise<Doctor> {
    const { data } = await api.post<Doctor>('/doctors', doctorData);
    return data;
  },

  async updateDoctor(id: number, doctorData: Partial<Doctor>): Promise<Doctor> {
    const { data } = await api.put<Doctor>(`/doctors/${id}`, doctorData);
    return data;
  },

  async deleteDoctor(id: number): Promise<void> {
    await api.delete(`/doctors/${id}`);
  }
}; 