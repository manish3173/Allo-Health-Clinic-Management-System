import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
export declare class AppointmentsService {
    private appointmentsRepository;
    constructor(appointmentsRepository: Repository<Appointment>);
    findAll(): Promise<Appointment[]>;
    findOne(id: number): Promise<Appointment>;
    create(appointmentData: Partial<Appointment>): Promise<Appointment>;
    update(id: number, appointmentData: Partial<Appointment>): Promise<Appointment>;
    remove(id: number): Promise<void>;
}
