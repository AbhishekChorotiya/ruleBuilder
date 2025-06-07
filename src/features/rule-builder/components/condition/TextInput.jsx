// Text input component
export const TextInput = ({
  name,
  placeholder = "Enter value...",
  handleKeyChange,
  condition,
}) => {
  const getValue = () => {
    switch (name) {
      case "value-input":
        return condition.valueInput;
      case "key-input":
        return condition.keyInput;
      default:
        return "";
    }
  };

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="text-input"
      value={getValue()}
      onChange={handleKeyChange}
    />
  );
};
