import { AppointmentsService } from './appointments.service';
import { Appointment } from './entities/appointment.entity';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    findAll(): Promise<Appointment[]>;
    findOne(id: string): Promise<Appointment>;
    create(createAppointmentDto: Partial<Appointment>): Promise<Appointment>;
    update(id: string, updateAppointmentDto: Partial<Appointment>): Promise<Appointment>;
    remove(id: string): Promise<void>;
}
