import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    poojaType: '',
    location: '',
    date: '',
    time: '',
    district: '',
    panditName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('✅ Booking Done:', formData);
    alert('बुकिंग सफलतापूर्वक दर्ज की गई!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📅 पंडित बुकिंग फॉर्म</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <select
          name="poojaType"
          value={formData.poojaType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">पूजा प्रकार चुनें</option>
          <option value="विवाह">विवाह</option>
          <option value="गृह प्रवेश">गृह प्रवेश</option>
          <option value="हवन">हवन</option>
          <option value="नमकरण">नमकरण</option>
        </select>

        <input
          name="location"
          type="text"
          placeholder="पूजा स्थान (पता)"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div className="flex gap-4">
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <input
          name="district"
          type="text"
          placeholder="जिला"
          value={formData.district}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="panditName"
          type="text"
          placeholder="पंडित का नाम (यदि ज्ञात हो)"
          value={formData.panditName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          ✅ बुक करें
        </button>
      </form>
    </div>
  );
}
