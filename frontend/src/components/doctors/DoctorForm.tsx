import React, { useState } from 'react';
import { Doctor } from '../../types/doctor.types';

interface DoctorFormProps {
  onSubmit: (data: Partial<Doctor>) => void;
  initialData?: Partial<Doctor>;
}

export const DoctorForm: React.FC<DoctorFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    specialty: initialData?.specialty || '',
    availability: initialData?.availability || []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Specialty</label>
        <input
          type="text"
          value={formData.specialty}
          onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      {/* Add availability slots here if needed */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}; 