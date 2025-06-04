export default function FilterSidebar({ filters, setFilters }) {
  return (
    <div className="w-64 bg-white p-4 border-r hidden md:block">
      <h2 className="text-xl font-bold mb-2">फिल्टर</h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">देवी-देवता</label>
        <select className="w-full border p-2 rounded">
          <option>सभी</option>
          <option>लक्ष्मी</option>
          <option>शिव</option>
          <option>हनुमान</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">सामग्री प्रकार</label>
        <select className="w-full border p-2 rounded">
          <option>सभी</option>
          <option>दीपक</option>
          <option>अगरबत्ती</option>
          <option>फूल</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">मूल्य सीमा</label>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </div>
  )
}
