import { useRouter } from 'next/router';
import { DoctorForm } from '../../components/doctors/DoctorForm';
import { doctorsService } from '../../services/doctors.service';
import { Doctor } from '../../types/doctor.types';

export default function NewDoctorPage() {
  const router = useRouter();

  const handleSubmit = async (data: Partial<Doctor>) => {
    try {
      await doctorsService.createDoctor(data);
      router.push('/doctors');
    } catch (error) {
      console.error('Error creating doctor:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">New Doctor</h1>
      <DoctorForm onSubmit={handleSubmit} />
    </div>
  );
} 