import { useEffect, useState } from 'react';
import { appointmentsService } from '../services/appointments.service';
import { queueService } from '../services/queue.service';
import { Appointment } from '../types/appointment.types';
import { QueueItem } from '../types/queue.types';

export default function DashboardPage() {
  const [todayAppointments, setTodayAppointments] = useState<Appointment[]>([]);
  const [currentQueue, setCurrentQueue] = useState<QueueItem[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [appointments, queue] = await Promise.all([
          appointmentsService.getAllAppointments(),
          queueService.getCurrentQueue(),
        ]);

        // Filter today's appointments
        const today = new Date();
        const filteredAppointments = appointments.filter(
          (apt) => new Date(apt.dateTime).toDateString() === today.toDateString()
        );

        setTodayAppointments(filteredAppointments);
        setCurrentQueue(queue);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Today's Appointments</h2>
          <div className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border-l-4 border-indigo-400 bg-indigo-50 p-4"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{appointment.patientName}</p>
                    <p className="text-sm text-gray-500">
                      With Dr. {appointment.doctor.name}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(appointment.dateTime).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {todayAppointments.length === 0 && (
              <p className="text-gray-500">No appointments for today</p>
            )}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Current Queue</h2>
          <div className="space-y-4">
            {currentQueue.map((item) => (
              <div
                key={item.id}
                className="border-l-4 border-green-400 bg-green-50 p-4"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.patientName}</p>
                    <p className="text-sm text-gray-500">Queue #{item.queueNumber}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
            {currentQueue.length === 0 && (
              <p className="text-gray-500">No patients in queue</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 