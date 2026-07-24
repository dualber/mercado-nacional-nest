import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useResource } from '../../hooks/useResource';
import personasApi from '../../api/personas';
import Loader from '../../components/ui/Loader';
import DataTable from '../../components/ui/DataTable';
import PersonaFormModal from './personaFormModal';

const columns = [

  {key: "cedula", label: "Cédula"},
  {key: "nombres", label: "Nombres"},
  {key: "apellidos", label: "Apellidos"},
  {key: "contacto", label: "Contacto"},
  {key: "correo", label: "Correo"},
  {key:  "rol", label: "Rol"}
]



 


export default function PersonasPage() {

  const { useList, useCreate, useUpdate, useRemove } = useResource("personas", personasApi);

  const { data: personas, isLoading } = useList();

//identifar personas con roles.
  const personasConRol = personas?.map((persona) => ({
    ...persona,
    rol: persona.rol || "Sin rol asignado",
  }));


  const crear = useCreate();
  const actualizar = useUpdate();
  const eliminar = useRemove();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  }

  const openEdit = (persona) => {
    setEditing(persona);
    setModalOpen(true);
  }

  const handleSubmit = (data) => {
    console.log(data);
    if (editing) {
      actualizar.mutate({id: editing.id, data}, {onSuccess: () => setModalOpen(false)});
    } else {
      crear.mutate(data, {onSuccess: () => setModalOpen(false)});
    }
  };

  const handleDelete = (persona) => {
    if (confirm(`¿Eliminar a "${persona.nombre}"? Esta acción no se puede deshacer.`)) {
      eliminar.mutate(persona.id);
    }
  };

  return (
    <div className='w-[95%] mx-auto py-6 space-y-6'>
      <PageHeader
      title="Personas"
      descripion="Gestiona la informacion de las Personas"
      action={
        <Button onClick={openCreate}>
          <Plus size={16}/> Nueva Persona
        </Button>
      }
      />
      {isLoading ? (
        <Loader />):(
          <DataTable
          columns={columns}
          rows={personasConRol}
          onEdit={openEdit}
          onDelete={handleDelete}
          emptyMessage="No hay personas registradas"
          />
        )}
      <PersonaFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editing}
        submitting={crear.isLoading || actualizar.isPending}
      />
    </div>
  )
}


