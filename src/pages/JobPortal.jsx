import { useState } from "react";

export default function JobPortal() {
  const [formType, setFormType] = useState("job");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">पंडित जॉब पोर्टल</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            formType === "job" ? "bg-pink-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFormType("job")}
        >
          नौकरी पोस्ट करें
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            formType === "apply" ? "bg-pink-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFormType("apply")}
        >
          आवेदन करें
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            formType === "caste" ? "bg-pink-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFormType("caste")}
        >
          जाति रजिस्ट्रेशन
        </button>
      </div>

      {/* नौकरी पोस्टिंग फॉर्म */}
      {formType === "job" && (
        <form className="space-y-4 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">🔸 नौकरी की पोस्टिंग</h2>
          <input
            type="text"
            placeholder="पद का नाम (उदाहरण: यज्ञ विशेषज्ञ)"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="कार्य का विवरण"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="स्थान (जिला / राज्य)"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="वेतन / मानदेय"
            className="w-full p-2 border rounded"
          />
          <button className="bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-800">
            पोस्ट करें
          </button>
        </form>
      )}

      {/* आवेदन फॉर्म */}
      {formType === "apply" && (
        <form className="space-y-4 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">🔸 आवेदन करें</h2>
          <input
            type="text"
            placeholder="पूरा नाम"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="मोबाइल नंबर"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="अनुभव (वर्षों में)"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="कौशल (मंत्र, तंत्र, विधि आदि)"
            className="w-full p-2 border rounded"
          />
          <button className="bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-800">
            आवेदन सबमिट करें
          </button>
        </form>
      )}

      {/* जाति रजिस्ट्रेशन फॉर्म */}
      {formType === "caste" && (
        <form className="space-y-4 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">🔸 पंडित जाति रजिस्ट्रेशन</h2>
          <input
            type="text"
            placeholder="नाम"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="मोबाइल नंबर"
            className="w-full p-2 border rounded"
          />
          <select className="w-full p-2 border rounded">
            <option>जाति चुनें</option>
            <option>ब्राह्मण</option>
            <option>कायस्थ</option>
            <option>वैश्य</option>
            <option>अन्य</option>
          </select>
          <input
            type="text"
            placeholder="राज्य / जिला"
            className="w-full p-2 border rounded"
          />
          <button className="bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-800">
            रजिस्टर करें
          </button>
        </form>
      )}
    </div>
  );
}
