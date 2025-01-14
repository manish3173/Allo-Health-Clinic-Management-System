import { Doctor } from './doctor.types';

export interface Appointment {
  id: number;
  patientName: string;
  dateTime: Date;
  status: 'BOOKED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  doctor: Doctor;
  doctorId: number;
} 