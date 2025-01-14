import { QueueService } from './queue.service';
import { Queue } from './entities/queue.entity';
export declare class QueueController {
    private readonly queueService;
    constructor(queueService: QueueService);
    getCurrentQueue(): Promise<Queue[]>;
    addToQueue(patientData: {
        patientName: string;
        priority?: number;
    }): Promise<Queue>;
    updateStatus(id: string, statusData: {
        status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED';
    }): Promise<Queue>;
}
