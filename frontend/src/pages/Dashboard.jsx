import { Link } from "react-router-dom";
import { Users, Package, Layers, ShoppingCart, Truck } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";

const modules = [
  { to: "/clientes", label: "Clientes", icon: Users },
  { to: "/productos", label: "Productos", icon: Package },
  { to: "/grupos", label: "Grupos", icon: Layers },
  { to: "/ventas", label: "Ventas", icon: ShoppingCart },
  { to: "/recogidas", label: "Recogidas", icon: Truck },
];

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Panel"
        description="Accesos rápidos a los módulos del sistema."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {modules.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-3 p-5 rounded-xl border border-border bg-surface hover:border-accent hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent-dark flex items-center justify-center">
              <Icon size={20} />
            </div>
            <span className="font-medium text-ink">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
