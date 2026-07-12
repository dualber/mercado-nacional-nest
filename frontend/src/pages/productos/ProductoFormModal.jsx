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
  onSubmit,
  initialData,
  submitting,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    setForm(initialData ?? emptyForm);
  }, [initialData, open]);

  const handleChange = (e) => {
  const { name, value, type } = e.target;

  setForm({
    ...form,
    [name]: type === "number" ? Number(value) : value,
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initialData ? "Editar producto" : "Nuevo Producto"}
    >
      <form onSubmit={handleSubmit}>
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
            name="peso_kilo"
            value={form.peso_kilo}
            type="number"
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
