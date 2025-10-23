import { useState } from "react";

export default function MenuToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-6 right-6 md:right-12 z-50">
      {/* Burger button (mobile) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setOpen(!open)}
        aria-label="Open Menu"
      >
        <span className={`block h-[2px] w-7 bg-[#222] transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
        <span className={`block h-[2px] w-7 bg-[#222] my-[6px] transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
        <span className={`block h-[2px] w-7 bg-[#222] transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
      </button>

      {/* Menu (mobile popover + desktop inline) */}
      <nav
        className={`
          md:flex md:static absolute right-0
          md:backdrop-blur-0 md:bg-transparent md:shadow-none
          backdrop-blur-md bg-white/30 shadow-lg rounded-xl
          p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4
          transition-all duration-300
          ${open ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
        `}
      >
        {[
          ["About", "/about"],
          ["Equipment", "/equipment"],
          ["Contact", "/contact"],
          ["Purchases", "/purchases"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="block px-4 py-2 md:px-0 md:py-0 rounded-lg md:rounded-none
                       text-[17px] font-medium tracking-wide text-[#222]
                       hover:text-black hover:bg-white/40 md:hover:bg-transparent
                       transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
