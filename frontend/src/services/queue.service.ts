import api from './api';
import { QueueItem } from '../types/queue.types';

export const queueService = {
  async getCurrentQueue(): Promise<QueueItem[]> {
    const { data } = await api.get<QueueItem[]>('/queue');
    return data;
  },

  async addToQueue(patientData: { patientName: string; priority?: number }): Promise<QueueItem> {
    const { data } = await api.post<QueueItem>('/queue', patientData);
    return data;
  },

  async updateQueueStatus(
    id: number, 
    status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED'
  ): Promise<QueueItem> {
    const { data } = await api.put<QueueItem>(`/queue/${id}/status`, { status });
    return data;
  }
}; 