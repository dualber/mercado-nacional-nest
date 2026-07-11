export default function Loader({ label = "Cargando..." }) {
  return (
    <div className="flex items-center gap-2 text-muted text-sm py-8 justify-center">
      <span className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      {label}
    </div>
  );
}
