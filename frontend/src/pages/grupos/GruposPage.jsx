import { useState } from "react";
import { Plus } from "lucide-react";
import { useResource } from "../../hooks/useResource";
import PageHeader from "../../components/ui/PageHeader";
import Button from "../../components/ui/Button";
import DataTable from "../../components/ui/DataTable";
import Loader from "../../components/ui/Loader";
import gruposApi from "../../api/grupos";
import GrupoFormModal from "./GrupoFormModal";




const columns = [
  {key: "nit", label: "Nit"},
  { key: "nombre", label: "Nombre" },
  { key: "contacto", label: "Contacto" },
  { key: "correo", label: "Correo" },
  { key: "tipo_cuenta", label: "Tipo_cuenta" },
  { key: "numero_cuenta", label: "Número de cuenta" },
];


export default function GruposPage() {

  const { useList, useCreate, useUpdate, useRemove } = useResource(
  "grupos",
  gruposApi
);


  const { data: grupos, isLoading } = useList();
  const crear = useCreate();
  const actualizar = useUpdate();
  const eliminar = useRemove();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = creando, objeto = editando

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (grupo) => {
    setEditing(grupo);
    setModalOpen(true);
  };

  const handleSubmit = (data) => {
    console.log("datos enviados", data);
    if (editing) {
      actualizar.mutate(
        { id: editing.id, data },
        { onSuccess: () => setModalOpen(false) }
      );
    } else {
      crear.mutate(data, { onSuccess: () => setModalOpen(false) });
    }
  };

  const handleDelete = (grupo) => {
    if (confirm(`¿Eliminar a "${grupo.nombre}"? Esta acción no se puede deshacer.`)) {
      eliminar.mutate(grupo.id);
    }
  };

  return (
    <div className="w-[95%] mx-auto py-6 space-y-6">
      <PageHeader
        title="Grupos"
        description="Gestiona la información de tus grupos."
        action={
          <Button onClick={openCreate}>
            <Plus size={16} /> Nuevo Grupo
          </Button>
        }
      />

      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          columns={columns}
          rows={grupos}
          onEdit={openEdit}
          onDelete={handleDelete}
          emptyMessage="Todavía no tienes clientes registrados."
        />
      )}
      <GrupoFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editing}
        submitting={crear.isPending || actualizar.isPending}
      />
    </div>
  );
}