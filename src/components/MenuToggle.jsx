import { useState } from "react";

export default function MenuToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-6 right-6 md:right-12 z-50">
      {/* Burger Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1"
        onClick={() => setOpen(!open)}
      >
        <div className={`h-1 w-8 bg-black transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`h-1 w-8 bg-black transition-all ${open ? 'opacity-0' : ''}`} />
        <div className={`h-1 w-8 bg-black transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Menu Items */}
      <div className={`md:flex flex-col md:static absolute right-0 bg-white/50 backdrop-blur-md rounded-lg shadow-lg p-4 space-y-3 transition-all duration-300 ${open ? 'top-14 opacity-100' : 'top-[-400px] opacity-0'} md:opacity-100`}>
        <a href="/about" className="text-lg font-medium hover:text-blue-700">About</a>
        <a href="/equipment" className="text-lg font-medium hover:text-blue-700">Equipment</a>
        <a href="/contact" className="text-lg font-medium hover:text-blue-700">Contact</a>
        <a href="/purchases" className="text-lg font-medium hover:text-blue-700">Purchases</a>
      </div>
    </div>
  );
}
