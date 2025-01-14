import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DoctorForm } from '../../components/doctors/DoctorForm';
import { doctorsService } from '../../services/doctors.service';
import { Doctor } from '../../types/doctor.types';

export default function EditDoctorPage() {
  const router = useRouter();
  const { id } = router.query;
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    if (id) {
      doctorsService
        .getDoctor(Number(id))
        .then(setDoctor)
        .catch(console.error);
    }
  }, [id]);

  const handleSubmit = async (data: Partial<Doctor>) => {
    try {
      await doctorsService.updateDoctor(Number(id), data);
      router.push('/doctors');
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Edit Doctor</h1>
      <DoctorForm initialData={doctor} onSubmit={handleSubmit} />
    </div>
  );
} 