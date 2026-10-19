export default function Input({ name, value, ...props }) {
  return (
    <input
      {...props}
      name={name}
      value={value}
      // autoFocus
      className="border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-gray-300 placeholder:text-xs placeholder:text-gray-300"
    //   onChange={(e) =>
    //     dispatch({
    //       type: "CHANGE_INPUT",
    //       name: name,
    //       value: e.target.value,
    //     })
    //   }
    />
  );
}
