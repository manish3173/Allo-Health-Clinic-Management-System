import { useState, useEffect } from 'react';
import { DoctorList } from '../../components/doctors/DoctorList';
import { doctorsService } from '../../services/doctors.service';
import { Doctor } from '../../types/doctor.types';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const fetchDoctors = async () => {
    try {
      const data = await doctorsService.getAllDoctors();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        await doctorsService.deleteDoctor(id);
        fetchDoctors();
      } catch (error) {
        console.error('Error deleting doctor:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Doctors</h1>
      <DoctorList doctors={doctors} onDelete={handleDelete} />
    </div>
  );
} 