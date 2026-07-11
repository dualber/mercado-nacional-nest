const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary:
    "bg-white text-ink border border-border hover:bg-gray-50",
  danger: "bg-danger text-white hover:bg-red-700",
  ghost: "text-muted hover:bg-gray-100",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
