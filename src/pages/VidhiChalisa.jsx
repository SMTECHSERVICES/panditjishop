import React from "react";

const pujas = [
  {
    name: "श्री लक्ष्मी पूजन",
    vidhi: "शुद्धि, आचमन, कलश स्थापना, दीप पूजन, श्रीसूक्त पाठ आदि करें।",
    chalisa: {
      text: "ॐ श्री लक्ष्मी चालीसा...",
      audio: "/audio/lakshmi_chalisa.mp3", // Place in public/audio/
    },
    pdf: "/pdfs/lakshmi_vidhi.pdf", // Place in public/pdfs/
  },
  {
    name: "हनुमान पूजन",
    vidhi: "शुद्धिकरण, पंचामृत स्नान, सिंदूर अर्पण, सुंदरकांड पाठ करें।",
    chalisa: {
      text: "ॐ हनुमान चालीसा...",
      audio: "/audio/hanuman_chalisa.mp3",
    },
    pdf: "/pdfs/hanuman_vidhi.pdf",
  },
];

const VidhiChalisa = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">
        पूजन विधि और चालीसा
      </h1>

      {pujas.map((pooja, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            {pooja.name}
          </h2>
          <p className="text-gray-700 mb-2">📜 <strong>विधि:</strong> {pooja.vidhi}</p>

          {/* PDF Download */}
          <a
            href={pooja.pdf}
            download
            className="inline-block mb-3 text-sm text-blue-600 hover:underline"
          >
            ⬇️ विधि PDF डाउनलोड करें
          </a>

          {/* Chalisa Text */}
          <div className="bg-gray-100 p-4 rounded mb-2">
            <h3 className="text-md font-medium text-gray-800 mb-1">🕉 चालीसा:</h3>
            <p className="text-gray-700 text-sm">{pooja.chalisa.text}</p>
          </div>

          {/* Audio Player */}
          <audio controls className="mt-2 w-full">
            <source src={pooja.chalisa.audio} type="audio/mp3" />
            आपका ब्राउज़र ऑडियो प्लेयर सपोर्ट नहीं करता।
          </audio>
        </div>
      ))}
    </div>
  );
};

export default VidhiChalisa;
