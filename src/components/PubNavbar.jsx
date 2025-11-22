import { Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function PubNavbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/drinks", label: "Drinks" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b1c2a]/70 bg-[#0b1c2a]/90 text-[#f7f3ea] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#c7a97b] to-[#a38355] shadow-inner flex items-center justify-center text-[#0b1c2a] font-bold">W</div>
          <div>
            <p className="text-[#f7f3ea] text-lg font-serif tracking-wide">The Whalebone Inn</p>
            <p className="text-xs text-[#f7f3ea]/70">Est. 1894 • Coastal Pub</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-[#c7a97b]" : "text-[#f7f3ea]/90 hover:text-[#c7a97b]"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/menu" className="ml-2 inline-flex items-center rounded-full bg-[#c7a97b] text-[#0b1c2a] px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow">View Menu</Link>
        </nav>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-[#f7f3ea]">
          <MenuIcon size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1c2a]">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-[#f7f3ea]/90 hover:text-[#c7a97b] py-2">
                {item.label}
              </Link>
            ))}
            <Link to="/menu" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-[#c7a97b] text-[#0b1c2a] px-4 py-2 text-sm font-medium">View Menu</Link>
          </div>
        </div>
      )}
    </header>
  );
}
