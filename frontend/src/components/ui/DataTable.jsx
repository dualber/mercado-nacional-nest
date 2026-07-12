import { Pencil, Trash2 } from "lucide-react";
import EmptyState from "./EmptyState";

/**
 * Tabla genérica reutilizable por cualquier módulo.
 *
 * columns: [{ key: "nombre", label: "Nombre", render?: (row) => JSX }]
 * rows: array de objetos (los datos)
 * onEdit / onDelete: callbacks opcionales, si no se pasan no se muestran las acciones
 */
export default function DataTable({
  columns,
  rows,
  onEdit,
  onDelete,
  emptyMessage = "No hay registros todavía.",
}) {
  if (!rows || rows.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface w-full-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-accent-dark">
          <tr className="border-b border-border bg-gray-50/50 text-left">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 font-bold text-black text-center"
              >
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th className="px-4 py-3 font-bold text-black text-center ">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-border last:border-0 hover:bg-gray-50/60 text-center"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-4 py-3 ">
                  <div className="flex justify-center gap-2 ">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="p-1.5 rounded-md text-muted hover:bg-accent-soft hover:text-accent-dark"
                        aria-label="Editar"
                      >
                        <Pencil size={18} />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(row)}
                        className="p-1.5 rounded-md text-muted hover:bg-danger-soft hover:text-danger"
                        aria-label="Eliminar"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
