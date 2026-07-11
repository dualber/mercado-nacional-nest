import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Layers,
  ShoppingCart,
  Truck,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Panel", icon: LayoutDashboard, end: true },
  { to: "/clientes", label: "Clientes", icon: Users },
  { to: "/productos", label: "Productos", icon: Package },
  { to: "/grupos", label: "Grupos", icon: Layers },
  { to: "/ventas", label: "Ventas", icon: ShoppingCart },
  { to: "/recogidas", label: "Recogidas", icon: Truck },
];

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-sidebar text-white flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <span className="font-display font-semibold text-lg tracking-tight">
          Panel<span className="text-accent">.</span>
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border-l-2 ${
                isActive
                  ? "bg-white/5 text-white border-accent"
                  : "text-sidebar-muted border-transparent hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Icon size={18} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-white/10 text-xs text-sidebar-muted">
        Conectado a {import.meta.env.VITE_API_URL}
      </div>
    </aside>
  );
}
