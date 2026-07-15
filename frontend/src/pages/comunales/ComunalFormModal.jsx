import React, { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";
import Field, { Input, Select } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { Section } from "lucide-react";
import { useResource } from "../../hooks/useResource";

const emptyForm = {
  nombre: "",
  zona: "",
};

function ComunalFormModal({
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
      title={initialData ? "editar Comunal" : "Nueva Comunal"}
      className="flex justify-center grid-cols-1 gap-2 mt-6"
    >
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-1 gap-4"
      >
        <Field label="Nombre">
          <Input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </Field>
        <Field label="Zona">
          <Select
            name="zona"
            value={form.zona}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una Comunal</option>
            <option value="Sur">Sur</option>
            <option value="Norte">Norte</option>
          </Select>
        </Field>
        <div className="flex justify-end gap-2 mt-6" >
          <Button type="button" variant="secundary" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit"  disabled={submitting}>
            {submitting ? "Guardando...":"Guardar"}
          </Button>

        </div>
      </form>
    </Modal>
  );
}

export default ComunalFormModal;
