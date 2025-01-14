import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppointmentForm } from '../../components/appointments/AppointmentForm';
import { createAppointment } from '../../services/api';
import { getDoctors } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Doctor } from '../../types/doctor.types';
import { AxiosResponse } from 'axios';

export default function NewAppointment() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctors()
      .then((response) => setDoctors(response.data))
      .catch(console.error);
  }, []);

  const handleSubmit = async (data: { patientName: string; doctorId: number; dateTime: string }) => {
    try {
      const appointmentData = {
        status: "BOOKED" as const,
        patientName: data.patientName,
        doctorId: data.doctorId,
        dateTime: new Date(data.dateTime)
      };
      await createAppointment(appointmentData);
      router.push('/appointments');
    } catch (error) {
      setError('Failed to create appointment');
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">New Appointment</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <AppointmentForm onSubmit={handleSubmit} doctors={doctors} />
      </div>
    </Layout>
  );
} 