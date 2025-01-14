import React, { useState } from 'react';
import { Doctor } from '../../types/doctor.types';

interface AppointmentFormProps {
  doctors: Doctor[];
  onSubmit: (data: {
    patientName: string;
    doctorId: number;
    dateTime: string;
  }) => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit, doctors }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorId: '',
    dateTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      doctorId: parseInt(formData.doctorId),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div>
        <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
          Patient Name
        </label>
        <input
          type="text"
          id="patientName"
          value={formData.patientName}
          onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
          Doctor
        </label>
        <select
          id="doctor"
          value={formData.doctorId}
          onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          required
        >
          <option value="">Select a doctor</option>
          {doctors?.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} - {doctor.specialty}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">
          Date & Time
        </label>
        <input
          type="datetime-local"
          id="dateTime"
          value={formData.dateTime}
          onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Book Appointment
        </button>
      </div>
    </form>
  );
}; 