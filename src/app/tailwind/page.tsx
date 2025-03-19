export default function GridLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        {/* First row */}
        <div className="bg-blue-500 p-4 text-white text-center">A</div>
        <div className="bg-blue-500 p-4 text-white text-center">B</div>
        <div className="bg-blue-500 p-4 text-white text-center">C</div>

        {/* Second row (D centered under B) */}
        <div></div>
        <div className="bg-blue-500 p-4 text-white text-center">D</div>
        <div></div>

        {/* Third row */}
        <div className="bg-blue-500 p-4 text-white text-center">E</div>
        <div className="bg-blue-500 p-4 text-white text-center">F</div>
        <div className="bg-blue-500 p-4 text-white text-center">G</div>
      </div>
    </div>
  );
}
