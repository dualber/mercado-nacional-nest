import { useState } from "react";
import { Plus } from "lucide-react";
import clientesApi from "../../api/clientes";
import { useResource } from "../../hooks/useResource";
import PageHeader from "../../components/ui/PageHeader";
import Button from "../../components/ui/Button";
import DataTable from "../../components/ui/DataTable";
import Loader from "../../components/ui/Loader";
import ClienteFormModal from "./ClienteFormModal";



const columns = [
  {key: "cedula", label: "Cédula"},
  { key: "nombres", label: "Nombres" },
  { key: "apellidos", label: "Apellidos" },
  { key: "tipo_cuenta", label: "Tipo de cuenta" },
  { key: "numero_cuenta", label: "Número de cuenta" },
  { key: "ciudad", label: "Ciudad" },
  { key: "correo", label: "Correo" },
  { key: "contacto", label: "Contacto" },
];


export default function ClientesPage() {

  const { useList, useCreate, useUpdate, useRemove } = useResource(
  "clientes",
  clientesApi
);


  const { data: clientes, isLoading } = useList();
  const crear = useCreate();
  const actualizar = useUpdate();
  const eliminar = useRemove();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = creando, objeto = editando

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (cliente) => {
    setEditing(cliente);
    setModalOpen(true);
  };

  const handleSubmit = (data) => {
    if (editing) {
      actualizar.mutate(
        { id: editing.id, data },
        { onSuccess: () => setModalOpen(false) }
      );
    } else {
      crear.mutate(data, { onSuccess: () => setModalOpen(false) });
    }
  };

  const handleDelete = (cliente) => {
    if (confirm(`¿Eliminar a "${cliente.nombre}"? Esta acción no se puede deshacer.`)) {
      eliminar.mutate(cliente.id);
    }
  };

  return (
    <div className="w-[95%] mx-auto py-6 space-y-6">
      <PageHeader
        title="Clientes"
        description="Gestiona la información de tus clientes."
        action={
          <Button onClick={openCreate}>
            <Plus size={16} /> Nuevo cliente
          </Button>
        }
      />

      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          columns={columns}
          rows={clientes}
          onEdit={openEdit}
          onDelete={handleDelete}
          emptyMessage="Todavía no tienes clientes registrados."
        />
      )}

      <ClienteFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editing}
        submitting={crear.isPending || actualizar.isPending}
      />
    </div>
  );
}
