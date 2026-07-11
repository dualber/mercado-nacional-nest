import { useState } from "react";
import PendingModule from "../../components/ui/PendingModule";
import { useResource } from "../../hooks/useResource";
import PageHeader from "../../components/ui/PageHeader";
import Loader from "../../components/ui/Loader";
import DataTable from "../../components/ui/DataTable";
import productosApi from "../../api/productos";
import Button from "../../components/ui/Button";
import { Plus } from "lucide-react";
import ProductoFormModal from "./ProductoFormModal";

const columns = [
  { key: "nombre", label: "nombre" },
  { key: "peso_kilo", label: "peso_kilo" },
];

export default function ProductosPage() {
  const { useList, useCreate, useUpdate, useRemove } = useResource(
    "productos",
    productosApi,
  );

  const { data: produtos, isLoading } = useList();
  const crear = useCreate();
  const actualizar = useUpdate();
  const eliminar = useRemove();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (producto) => {
    setEditing(producto);
    setModalOpen(true);
  };

  const handleSubmit = (data) => {
    if (editing) {
      actualizar.mutate(
        { id: editing.id, data },
        { onSuccess: () => setModalOpen(false) },
      );
    } else {
      crear.mutate(data, { onSuccess: () => setModalOpen(false) });
    }
  };

  const handleDelete = (producto) => {
    if (
      confirm(
        `¿Eliminar a "${producto.nombre}"? Esta accion no se puede deshacer.`,
      )
    ) {
      eliminar.mutate(producto.id);
    }
  };

  return (
    <div>
      <PageHeader
        title="Productos"
        description="Gestiona la informacion de tus Productos."
        action={
          <Button onClick={openCreate}>
            <Plus size={16} /> Nuevo Producto{" "}
          </Button>
        }
      />

      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          columns={columns}
          rows={produtos}
          onEdit={openEdit}
          onDelete={handleDelete}
          emptyMessage="Todavia no tienes Productos Registrados"
        />
      )}

      <ProductoFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editing}
        submitting={crear.isPending || actualizar.isPending}
      />
    </div>
  );
}
