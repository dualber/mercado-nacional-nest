import PageHeader from "./PageHeader";

/**
 * Placeholder para módulos que todavía no tienen sus endpoints
 * confirmados. En cuanto tengamos las rutas reales del backend,
 * esta página se reemplaza siguiendo el mismo patrón que
 * src/pages/clientes/ClientesPage.jsx
 */
export default function PendingModule({ title }) {
  return (
    <div>
      <PageHeader title={title} description="Módulo pendiente de conectar." />
      <div className="rounded-xl border border-dashed border-border bg-surface/50 py-12 text-center text-muted text-sm">
        Comparte los endpoints de "{title}" y conectamos este módulo
        siguiendo el mismo patrón que "Clientes".
      </div>
    </div>
  );
}
