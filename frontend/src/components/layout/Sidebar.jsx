import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Layers,
  ShoppingCart,
  Truck,
  TreePalm,
  ChevronDown,
  Settings,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Panel", icon: LayoutDashboard, end: true },
  { to: "/clientes", label: "Clientes", icon: Users },
  {
    label: "Produccion",
    icon: ShoppingCart,
    children: [
      { to: "/grupos", label: "Grupos", icon: Layers },
      { to: "/fincas", label: "Fincas", icon: TreePalm },
      { to: "/productos", label: "Productos", icon: Package },
      { to: "/comunales", label: "Comunales", icon: TreePalm },

    ],
  },
{
    label: "Personal",
    icon: Users,
    children: [
       { to: "/personas", label: "Personas", icon: Layers },
       { to: "/vehiculos", label: "Vehiculos", icon: Truck },
    ],
  },

  { to: "/ventas", label: "Ventas", icon: ShoppingCart },
  { to: "/recogidas", label: "Recogidas", icon: Truck },
  { to: "/compras", label: "Compras", icon: ShoppingCart },
  {
    label: "Configuración",
    icon: Settings,
    children: [
       { to: "/roles", label: "Roles", icon: Layers },
       { to: "/usuarios", label: "Usuarios", icon: Users },
    ],
  },
  
];

function NavItem({ to, label, icon: Icon, end }) {
  return (
    <NavLink
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
      {Icon && <Icon size={18} strokeWidth={2} />}
      {label}
    </NavLink>
  );
}

function NavGroup({ label, icon: Icon, children }) {
  const location = useLocation();
  const hasActiveChild = children.some((child) =>
    location.pathname.startsWith(child.to)
  );
  const [open, setOpen] = useState(hasActiveChild);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border-l-2 border-transparent ${
          hasActiveChild
            ? "text-white"
            : "text-sidebar-muted hover:bg-white/5 hover:text-white"
        }`}
      >
        <Icon size={18} strokeWidth={2} />
        <span className="flex-1 text-left">{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-1 ml-4 pl-3 border-l border-white/10 space-y-1">
          {children.map((child) => (
            <NavItem key={child.to} {...child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-sidebar text-white flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <span className="font-display font-semibold text-lg tracking-tight">
          Panel<span className="text-accent">.</span>
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) =>
          item.children ? (
            <NavGroup key={item.label} {...item} />
          ) : (
            <NavItem key={item.to} {...item} />
          )
        )}
      </nav>

      <div className="px-6 py-4 border-t border-white/10 text-xs text-sidebar-muted">
        Conectado a {import.meta.env.VITE_API_URL}
      </div>
    </aside>
  );
}