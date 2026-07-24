import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";
import Field, { Select,Input } from "../../components/ui/Field";
import Button from "../../components/ui/Button"

const emptyForm = {
  nit: "",
  nombre: "",
  contacto: "",
  correo: "",
  tipo_cuenta: "",
  numero_cuenta: "",
};

export default function GrupoFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
  submitting,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    setForm(initialData ?? emptyForm);
  }, [initialData, open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Modal
    open={open}
    onClose={onClose}
    title={initialData ? "Editar Grupo": "Nuevo Grupo"}
    >
        <form onSubmit={handleSubmit}>
            <Field label="Nit">
                <Input
                name="nit"
                value={form.nit}
                onChange={handleChange}
                required/>
            </Field>
            <Field label="Nombre">
                <Input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required/>
            </Field>
            <Field label="Contacto">
                <Input
                name="contacto"
                value={form.contacto}
                onChange={handleChange}
                required/>
            </Field>
            <Field label="Correo">
                <Input
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required/>
            </Field>
            <Field label="tipo_cuenta">
                <Select
                name="tipo_cuenta"
                value={form.tipo_cuenta}
                onChange={handleChange}
                required
                >
            <option value="">Seleccione un tipo</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Corriente">Corriente</option>
                </Select>
            </Field>
            <Field label="Numero_cuenta">
                <Input
                name="numero_cuenta"
                value={form.numero_cuenta}
                onChange={handleChange}
                required/>
            </Field>
            <div className="flex justify-end gap-2 mt-6" >
                <Button type="button" variant="secundary" onClick={onClose}>
                    Cancelar
                </Button>
                <Button type="submit" disabled={submitting}>
                    {submitting ? "Guardando...": "Guardar"}
                </Button>
            </div>
        </form>
    </Modal>
  )

}
