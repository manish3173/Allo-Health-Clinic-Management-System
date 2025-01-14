import { Repository } from 'typeorm';
import { Queue } from './entities/queue.entity';
export declare class QueueService {
    private queueRepository;
    constructor(queueRepository: Repository<Queue>);
    getCurrentQueue(): Promise<Queue[]>;
    addToQueue(patientData: {
        patientName: string;
        priority?: number;
    }): Promise<Queue>;
    updateStatus(id: number, status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED'): Promise<Queue>;
}
