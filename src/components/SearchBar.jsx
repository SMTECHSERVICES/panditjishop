export default function SearchBar() {
  return (
    <div className="flex justify-center my-6 px-4">
      <input
        type="text"
        placeholder="🔍 अपनी पूजा सामग्री खोजें"
        className="w-full max-w-2xl px-4 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
      />
    </div>
  )
}
