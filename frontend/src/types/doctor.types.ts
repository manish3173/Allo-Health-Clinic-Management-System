import { Appointment } from './appointment.types';

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  availability: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  appointments?: Appointment[];
  specialization: string;
} 