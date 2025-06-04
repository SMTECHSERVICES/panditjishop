import { useState } from 'react'

export default function PanditRegistration() {
  const [form, setForm] = useState({
    name: '',
    caste: '',
    district: '',
    expertise: '',
    contact: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('✅ Pandit Registered:', form)
    alert('पंजीकरण सफलतापूर्वक हुआ!')
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">🧘 पंडित पंजीकरण फॉर्म</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="नाम"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="caste"
          placeholder="जाति (उदा: ब्राह्मण, वैद्य)"
          className="w-full p-2 border rounded"
          value={form.caste}
          onChange={handleChange}
        />
        <input
          name="district"
          placeholder="जिला"
          className="w-full p-2 border rounded"
          value={form.district}
          onChange={handleChange}
        />
        <input
          name="expertise"
          placeholder="विशेषज्ञता (उदा: हवन, विवाह)"
          className="w-full p-2 border rounded"
          value={form.expertise}
          onChange={handleChange}
        />
        <input
          name="contact"
          placeholder="संपर्क नंबर"
          className="w-full p-2 border rounded"
          value={form.contact}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          ✅ रजिस्टर करें
        </button>
      </form>
    </div>
  )
}
