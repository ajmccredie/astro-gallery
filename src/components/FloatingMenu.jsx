import { useState } from "react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "/about" },
    { label: "Equipment", href: "/equipment" },
    { label: "Contact", href: "/contact" },
    { label: "Purchases", href: "/purchases" },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-white/40 backdrop-blur-md rounded-lg shadow-md hover:bg-white/60 transition"
        aria-label="Toggle Menu"
      >
        <span className={`block h-[2px] w-6 bg-[#222] transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}`}></span>
        <span className={`block h-[2px] w-6 bg-[#222] my-[5px] transition-all ${open ? "opacity-0" : ""}`}></span>
        <span className={`block h-[2px] w-6 bg-[#222] transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
      </button>

      {/* Menu links */}
      <nav
        className={`
          absolute md:static top-14 right-0
          bg-white/40 backdrop-blur-md rounded-lg shadow-lg md:shadow-none
          p-3 md:p-0
          space-y-2 md:space-y-0 md:space-x-4
          flex-col md:flex-row
          flex ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 md:opacity-100 md:translate-y-0"}
          transition-all duration-300
        `}
      >
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[#222] text-sm md:text-base font-medium tracking-wide hover:text-black hover:underline transition"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
