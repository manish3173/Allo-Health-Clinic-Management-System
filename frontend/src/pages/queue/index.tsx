import { useState, useEffect } from 'react';
import { QueueList } from '../../components/queue/QueueList';
import { AddToQueue } from '../../components/queue/AddToQueue';
import { queueService } from '../../services/queue.service';
import { QueueItem } from '../../types/queue.types';

export default function QueuePage() {
  const [queue, setQueue] = useState<QueueItem[]>([]);

  const fetchQueue = async () => {
    try {
      const data = await queueService.getCurrentQueue();
      setQueue(data);
    } catch (error) {
      console.error('Error fetching queue:', error);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  const handleAddToQueue = async (data: { patientName: string; priority?: number }) => {
    try {
      await queueService.addToQueue(data);
      fetchQueue();
    } catch (error) {
      console.error('Error adding to queue:', error);
    }
  };

  const handleStatusUpdate = async (id: number, status: 'WAITING' | 'WITH_DOCTOR' | 'COMPLETED') => {
    try {
      await queueService.updateQueueStatus(id, status);
      fetchQueue();
    } catch (error) {
      console.error('Error updating queue status:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Queue Management</h1>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <QueueList queue={queue} onStatusUpdate={handleStatusUpdate} />
        </div>
        <div>
          <AddToQueue onSubmit={handleAddToQueue} />
        </div>
      </div>
    </div>
  );
} 