import { InputWrapper } from "./InputWrapper";

// Generic select component
export const SelectInput = ({
  name,
  options,
  onChange,
  placeholder = "Select...",
  value,
}) => {
  return (
    <InputWrapper>
      <select name={name} onChange={onChange} value={value || ""}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};
