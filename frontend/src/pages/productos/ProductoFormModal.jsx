import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";
import Field, { Input } from "../../components/ui/Field";
import Button from "../../components/ui/Button"

const emptyForm = {
  nombre: "",
  peso_kilo: "",
};

export default function ProductoFormModal({
  open,
  onClose,
  Onsubmit,
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
    onsubmit(form);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initialData ? "Editar producto" : "Nuevo Producto"}
    >
      <form onsubmit={handleSubmit}>
        <Field label="Nombre">
          <Input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </Field>
        <Field label="peso">
          <Input
            name="peso"
            value={form.peso_kilo}
            onChange={handleChange}
            required
          />
        </Field>
        <div className="flex justify-end gap-2 mt-6">
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
