import React, { useState } from 'react';

interface AddToQueueProps {
  onSubmit: (data: { patientName: string; priority?: number }) => void;
}

export const AddToQueue = ({ onSubmit }: AddToQueueProps) => {
  const [formData, setFormData] = useState({
    patientName: '',
    priority: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ patientName: '', priority: 0 });
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
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
          Priority (0-5)
        </label>
        <input
          type="number"
          id="priority"
          min="0"
          max="5"
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) })}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to Queue
        </button>
      </div>
    </form>
  );
}; 