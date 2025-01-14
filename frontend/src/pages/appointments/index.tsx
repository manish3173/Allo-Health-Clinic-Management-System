import { useState, useEffect } from 'react';
import { AppointmentList } from '../../components/appointments/AppointmentList';
import { appointmentsService } from '../../services/appointments.service';
import { doctorsService } from '../../services/doctors.service';
import { Appointment } from '../../types/appointment.types';
import { Doctor } from '../../types/doctor.types';
import Link from 'next/link';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const fetchAppointments = async () => {
    try {
      const data = await appointmentsService.getAllAppointments();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
    doctorsService.getAllDoctors().then(setDoctors).catch(console.error);
  }, []);

  const handleStatusUpdate = async (
    id: number,
    status: 'BOOKED' | 'COMPLETED' | 'CANCELLED'
  ) => {
    try {
      await appointmentsService.updateAppointment(id, { status });
      fetchAppointments();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        <Link
          href="/appointments/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          New Appointment
        </Link>
      </div>
      
      <AppointmentList
        appointments={appointments}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  );
} 