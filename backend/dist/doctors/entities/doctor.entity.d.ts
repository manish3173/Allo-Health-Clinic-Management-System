import { Appointment } from '../../appointments/entities/appointment.entity';
export declare class Doctor {
    id: number;
    name: string;
    specialty: string;
    availability: boolean;
    appointments: Appointment[];
}
