export default function Input({
  label,
  labelStyle,
  id,
  icon,
  type = "text",
  name,
  value,
  dispatch,
  className = "",
  ...props
}) {
  return (
    <div className="relative flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className={`text-gray-700 text-sm  ${labelStyle}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          onChange={(e) => {
            dispatch({
              type: "change_input",
              name: name,
              value: e.target.value,
            });
          }}
          {...props}
          className={`bg-white w-full py-2 pl-12 ring-1 ring-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-blue-50 placeholder:text-sm placeholder:text-gray-400/70  ${className}`}
        />
        <span className="absolute left-3 top-2.5 text-gray-400">{icon}</span>
      </div>
    </div>
  );
}
