import { Doctor } from '../../doctors/entities/doctor.entity';
export declare class Appointment {
    id: number;
    patientName: string;
    doctor: Doctor;
    dateTime: Date;
    status: 'BOOKED' | 'COMPLETED' | 'CANCELLED';
}
