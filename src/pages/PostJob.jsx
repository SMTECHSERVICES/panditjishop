import { useState } from 'react'

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    contact: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('✅ Job Posted:', formData)
    alert('Job पोस्ट सफलतापूर्वक हो गई!')
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">📢 नई पंडित नौकरी पोस्ट करें</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="जॉब का शीर्षक"
          className="w-full p-2 border rounded"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="जॉब विवरण"
          className="w-full p-2 border rounded"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="स्थान (जिला)"
          className="w-full p-2 border rounded"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          name="contact"
          placeholder="संपर्क नंबर"
          className="w-full p-2 border rounded"
          value={formData.contact}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ✅ पोस्ट करें
        </button>
      </form>
    </div>
  )
}
