// Text input component
export const TextInput = ({
  name,
  placeholder = "Enter value...",
  handleKeyChange,
  condition,
  inputType, // Add inputType prop to determine which field to use
}) => {
  const getValue = () => {
    switch (name) {
      case "value-input":
        // For metadata_value type, use metadataValue
        // For str_value and number types, use criteriaValue
        return inputType === "metadata_value"
          ? condition.metadataValue
          : condition.criteriaValue;
      case "key-input":
        return condition.metadataKey;
      default:
        return "";
    }
  };

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      value={getValue()}
      onChange={handleKeyChange}
    />
  );
};
