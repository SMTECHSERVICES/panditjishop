export default function Contact() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📞 संपर्क करें</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="आपका नाम"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="ईमेल"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="आपका संदेश"
          className="w-full border p-2 rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          भेजें
        </button>
      </form>
    </div>
  );
}
