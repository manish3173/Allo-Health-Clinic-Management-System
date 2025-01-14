export interface QueueItem {
  id: number;
  patientName: string;
  queueNumber: number;
  priority: number;
  status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED';
  createdAt: Date;
} 