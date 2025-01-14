import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Queue } from './entities/queue.entity';

@Injectable()
export class QueueService {
  constructor(
    @InjectRepository(Queue)
    private queueRepository: Repository<Queue>,
  ) {}

  async getCurrentQueue(): Promise<Queue[]> {
    return this.queueRepository.find({
      where: { status: 'WAITING' },
      order: { priority: 'DESC', createdAt: 'ASC' },
    });
  }

  async addToQueue(patientData: { patientName: string; priority?: number }): Promise<Queue> {
    const lastQueue = await this.queueRepository.find({
      order: { queueNumber: 'DESC' },
      take: 1,
    });

    const newQueueNumber = lastQueue.length > 0 ? lastQueue[0].queueNumber + 1 : 1;

    const queueItem = this.queueRepository.create({
      ...patientData,
      queueNumber: newQueueNumber,
      status: 'WAITING',
      createdAt: new Date(),
    });

    return this.queueRepository.save(queueItem);
  }

  async updateStatus(id: number, status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED'): Promise<Queue> {
    await this.queueRepository.update(id, { status });
    return this.queueRepository.findOne({ where: { id } });
  }
} 