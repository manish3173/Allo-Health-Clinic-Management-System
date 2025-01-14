import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
export declare class DoctorsService {
    private doctorsRepository;
    constructor(doctorsRepository: Repository<Doctor>);
    findAll(): Promise<Doctor[]>;
    findOne(id: string): Promise<Doctor>;
    create(doctorData: Partial<Doctor>): Promise<Doctor>;
    update(id: number, doctorData: Partial<Doctor>): Promise<Doctor>;
    remove(id: number): Promise<void>;
}
