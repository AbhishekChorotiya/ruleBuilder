// Legacy SelectInput component - kept for compatibility
export const SelectInput = ({
  name,
  options,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <select
      name={name}
      className="select-input"
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
