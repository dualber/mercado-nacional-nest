import { useState } from "react";
import { useResource } from "../../hooks/useResource";
import PageHeader from "../../components/ui/PageHeader";
import Button from "../../components/ui/Button";
import { Plus } from "lucide-react";
import fincasApi from "../../api/fincas";
import Loader from "../../components/ui/Loader";
import DataTable from "../../components/ui/DataTable";
import FincaFormModal from "../fincas/FincaFormModal";

//creamos la columnas de las tablas de las fincas
const columns = [
  { key: "ibm", label: "ibm" },
  { key: "nombre", label: "nombre" },
  { key: "contacto", label: "contacto" },
  { key: "grupo", label: "Grupo" },
  { key: "comunal", label: "Comunal" },
];

//traemmos las funciones de userReduce a la pagina de fincas
export default function FincasPages() {
  //traemos las funciones de useReduce
  const { useList, useCreate, useUpdate, useRemove } = useResource(
    "fincas",
    fincasApi,
  );

  const { data: fincas, isLoading } = useList();
  const crear = useCreate();
  const actualizar = useUpdate();
  const eliminar = useRemove();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (finca) => {
    setEditing(finca);
    setModalOpen(true);
  };

  const handleSubmit = (data) => {
    console.log(data);
    if (editing) {
      actualizar.mutate(
        { id: editing.id, data },
        { onSuccess: () => setModalOpen(false) },
      );
    } else {
      crear.mutate(data, { onSuccess: () => setModalOpen(false) });
    }
  };

  const handleDelete = (finca) => {
    if (
      confirm(
        `¿Eliminar a "${finca.nombre}"? Esta acción no se puede deshacer.`,
      )
    ) {
      eliminar.mutate(finca.id);
    }
  };

  return (
    <div className="w-[95%] mx-auto py-6 space-y-6">
      <PageHeader
        title="Fincas"
        description="Gestiona la informacion de las Fincas"
        action={
          <Button onClick={openCreate}>
            <Plus size={16} /> Nueva Finca
          </Button>
        }
      />
      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          columns={columns}
          rows={fincas}
          onEdit={openEdit}
          onDelete={handleDelete}
          emptyMessage="Todavia no tienes clientes registrados."
        />
      )}
      <FincaFormModal
      open={modalOpen}
      onClose={()=> setModalOpen(false)}
      onSubmit={handleSubmit}
      initialData={editing}
      submitting={crear.isPending || actualizar.isPending}
      />
    </div>
  );
}
