import { InputWrapper } from "./InputWrapper";

// Text input component
export const TextInput = ({
  inputType,
  placeholder = "Enter value...",
  value = "",
  onChange,
}) => {
  return (
    <InputWrapper>
      <input
        type="text"
        name={inputType}
        placeholder={placeholder}
        className="px-2 py-1"
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};
