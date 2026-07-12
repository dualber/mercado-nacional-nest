import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";
import Field, { Input, Select } from "../../components/ui/Field";
import Button from "../../components/ui/Button";

const emptyForm = {
  cedula: "",
  nombres: "",
  apellidos: "",
  tipo_cuenta: "",
  numero_cuenta: "",
  ciudad: "",
  correo: "",
  contacto: "",
};

export default function ClienteFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
  submitting,
}) {
  const [form, setForm] = useState(emptyForm);

  // Cada vez que se abre el modal, precarga los datos si es edición,
  // o limpia el formulario si es creación.
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
      title={initialData ? "Editar cliente" : "Nuevo cliente"}
      className="flex justify-center  grid-cols-1 gap-2 mt-6"
    >
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <Field label="Cedula">
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
        <Field label="Tipo de cuenta">
          <Select
            name="tipo_cuenta"
            value={form.tipo_cuenta}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un tipo</option>
            <option value="Ahorro">Ahorro</option>
            <option value="corriente">Corriente</option>
          </Select>
        </Field>
        <Field label="Numero de cuenta">
          <Input
            name="numero_cuenta"
            type="text"
            value={form.numero_cuenta}
            onChange={handleChange}
            required
          />
        </Field>
        <Field label="Ciudad">
          <Input
            name="ciudad"
            value={form.ciudad}
            onChange={handleChange}
            required
          />
        </Field>
        <Field label="Correo">
          <Input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
        </Field>
        <Field label="Contacto">
          <Input
            name="contacto"
            value={form.contacto}
            onChange={handleChange}
          />
        </Field>
        <div className="lg:col-span-2 flex justify-center gap-2 mt-6">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
