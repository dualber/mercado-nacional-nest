import {  useState } from "react";
import { useResource } from "../../hooks/useResource";
import DataTable from "../../components/ui/DataTable";
import Button from "../../components/ui/Button";
import { Plus } from "lucide-react";
import PageHeader from "../../components/ui/PageHeader";
import Loader from "../../components/ui/Loader";
import comunalesApi from "../../api/comunales";
import ComunalFormModal from "../../pages/comunales/ComunalFormModal";

const columns = [
    {key:"nombre", label: "Nombre"},
    {key: "zona", label: "Zona"}
];


export default function ComunalesPage() {
    //ingresamos las funciones del useResource
    const {useList, useCreate, useUpdate, useRemove} = useResource(
        "comunales",
        comunalesApi
    );

    const {data:comunales, isLoading } = useList();
    const crear = useCreate();
    const actualizar = useUpdate();
    const eliminar = useRemove();

    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    
    const openCreate =() =>{
        setEditing(null);
        setModalOpen(true);
    }
    const openEdit = (comunal) => {
        setEditing(comunal);
        setModalOpen(true);
    };

    const handleSubmit = (data) => {
        if(editing){
            actualizar.mutate(
                {id:editing.id, data},
            {onSuccess: () => setModalOpen(false)}
            );
        }else{
            crear.mutate(data, {onSuccess:() => setModalOpen(false)});
        }
    };

    const handleDelete = (comunal) => {
        if(confirm(`¿Eliminar a "${comunal.nombre}"? Esta acción no se puede deshacer.`)){
            eliminar.mutate(comunal.id)
        }
    };

  return (
    <div className="w-[95%] mx-auto py-6 space-y-6">
          <PageHeader
            title="Comunales"
            description="Gestiona la información de tus comunales."
            action={
              <Button onClick={openCreate}>
                <Plus size={16} /> Nueva comunal
              </Button>
            }
          />
    
          {isLoading ? (
            <Loader />
          ) : (
            <DataTable
              columns={columns}
              rows={comunales}
              onEdit={openEdit}
              onDelete={handleDelete}
              emptyMessage="Todavía no tienes Comunales registradas."
            />
          )}
    
          <ComunalFormModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleSubmit}
            initialData={editing}
            submitting={crear.isPending || actualizar.isPending}
          />
        </div>
  )
}

