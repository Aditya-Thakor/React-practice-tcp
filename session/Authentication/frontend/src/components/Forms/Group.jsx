export default function Group({ children, className = "" }) {
  return (
    <div
      className={`flex flex-col gap-2 relative has-invalid:bg-red-100 rounded-md p-2 ${className}`}
    >
      {children}
    </div>
  );
}
