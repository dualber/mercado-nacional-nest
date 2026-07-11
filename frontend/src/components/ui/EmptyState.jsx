export default function EmptyState({ message }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface/50 py-12 text-center text-muted text-sm">
      {message}
    </div>
  );
}
