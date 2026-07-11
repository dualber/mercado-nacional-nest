import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="font-display font-semibold text-3xl mb-2">404</h1>
      <p className="text-muted mb-6">Esta página no existe.</p>
      <Link to="/" className="text-accent font-medium hover:underline">
        Volver al panel
      </Link>
    </div>
  );
}
