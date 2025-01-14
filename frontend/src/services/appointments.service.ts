import api from './api';
import { Appointment } from '../types/appointment.types';

export const appointmentsService = {
  async getAllAppointments(): Promise<Appointment[]> {
    const { data } = await api.get<Appointment[]>('/appointments');
    return data;
  },

  async getAppointment(id: number): Promise<Appointment> {
    const { data } = await api.get<Appointment>(`/appointments/${id}`);
    return data;
  },

  async createAppointment(appointmentData: Partial<Appointment>): Promise<Appointment> {
    const { data } = await api.post<Appointment>('/appointments', appointmentData);
    return data;
  },

  async updateAppointment(id: number, appointmentData: Partial<Appointment>): Promise<Appointment> {
    const { data } = await api.put<Appointment>(`/appointments/${id}`, appointmentData);
    return data;
  },

  async deleteAppointment(id: number): Promise<void> {
    await api.delete(`/appointments/${id}`);
  }
}; 