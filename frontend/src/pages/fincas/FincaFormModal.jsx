import  { useEffect, useState } from 'react'
import Modal from '../../components/ui/Modal';
import Field, { Input, Select } from '../../components/ui/Field';
import Button from '../../components/ui/Button';
import gruposApi from '../../api/grupos'
import { useResource } from '../../hooks/useResource';
import comunalesApi from '../../api/comunales';

const emptyForm = {
    ibm:"",
    nombre: "",
    contacto:"",
    id_grupo:"",
    id_comunal:"",

}

function fincaFormModal({
    open,
    onClose,
    onSubmit,
    initialData,
    submitting,
}) {

    const [form, setForm] = useState(emptyForm);

    const {useList: useListGrupos} = useResource("grupos", gruposApi);
    const {useList: useListComunales} = useResource("comunales", comunalesApi);

    const {data:grupos, isLoading: cargandoGrupos} = useListGrupos();
    const {data:comunales, isLoading:cargandoComunales} = useListComunales();
  
    useEffect(() =>{
        setForm(initialData ?? emptyForm);
    },[initialData,open]);

    const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.type ==="number"? Number(e.target.value) : e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({...form,id_grupo: form.id_grupo,id_comunal:form.id_comunal });
    };

  return (
    <Modal
    open={open}
    onClose={onClose}
    title={initialData  ? "Editar Finca": "Nueva Finca"}
    >
        <form onSubmit={handleSubmit}>
            <Field label="Ibm">
                <Input 
                name="ibm"
                value={form.ibm}
                onChange={handleChange}
                required
                />
            </Field>
            <Field label="Nombre">
                <Input 
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                />
            </Field>
            <Field label="Contacto">
                <Input 
                name="contacto"
                value={form.contacto}
                onChange={handleChange}
                required
                />
            </Field>
            <Field label="grupo">
                <Select 
                name="id_grupo"
                value={form.id_grupo}
                onChange={handleChange}
                required
                >
                 <option value="" disabled className='w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent bg-white"'>
                    {cargandoGrupos ? "cargando grupos": "selecciona un Grupo"}
                    </option>   
                    {grupos?.map((grupo) => (
                        <option key={grupo.id} value={grupo.id} className='w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent bg-white"'>
                            {grupo.nombre}
                        </option>
                    ))}
                </Select>
            </Field>
            <Field label="Comunal">
                <Select
                name="id_comunal"
                value={form.id_comunal}
                onChange={handleChange}
                required >
                    <option value="" disabled>
                        {cargandoComunales ? "cargando Comunales": "selecciona una comunal"}
                    </option>
                    {comunales?.map((comunal) => (
                        <option key={comunal.id} value={comunal.id}>
                           {comunal.nombre}
                        </option>
                    ))}
                </Select>
            </Field>
            <div className='lg:col-span-2 flex justify-center gap-2 mt-6'>
                <Button type="button" variant='secondary' onClick={onClose}>
                    Cancelar
                </Button>
                <Button type="submit" disabled={submitting}>
                    {submitting ? "Guardando...": "Guardar"}
                </Button>
            </div>
        </form>
    </Modal>
  );
}

export default fincaFormModal