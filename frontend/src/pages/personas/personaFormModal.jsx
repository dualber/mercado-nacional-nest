import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";
import Field, { Input, Select } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import {useResource} from "../../hooks/useResource";
import rolesApi from "../../api/roles";



const emptyForm = {
  cedula: "",
  nombres: "",
  apellidos: "",
  contacto: "",
  correo: "",

};

export default function personaFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
  submitting,
}) {

  const [form, setForm] = useState(emptyForm);
  const { useList: useListRoles } = useResource("roles", rolesApi);
  const { data: roles, isLoading: cargandoRoles } = useListRoles();

  useEffect(() => {
    setForm(initialData ?? emptyForm);
  }, [initialData, open]);

  const handleChange = (e) => {
    setForm({
      ...form,[e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ cedula: form.cedula, nombres: form.nombres, apellidos: form.apellidos, contacto: form.contacto, correo: form.correo });
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initialData ? "Editar Persona" : "Nueva Persona"}
    >
      <form onSubmit={handleSubmit}>
        <Field label="Cédula">
          <Input
            name="cedula"
            value={form.cedula}
            onChange={handleChange}
            required
          />
        </Field>
        <Field label="Nombres">
          <Input
            name="nombres"
            value={form.nombres}
            onChange={handleChange}
            required
          />
        </Field>
        <Field label="Apellidos">
          <Input
            name="apellidos"
            value={form.apellidos}
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
        <Field label="Correo">
          <Input
            name="correo"
            value={form.correo}
            type="email"
            onChange={handleChange}
            required
          />
        </Field>
    
        <div className="lg:col-span-2 flex justify-end gap-2 mt-6">
          <Button type="submit" disabled={submitting}>
            {submitting ? "Guardando..." : "Guardar"}
          </Button>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
}

