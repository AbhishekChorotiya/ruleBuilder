import { SelectInput } from "./SelectInput";

// Specialized select components
export const SelectKeyItem = ({ allKeys, handleKeyChange, value }) => {
  return (
    <SelectInput
      name="key-item"
      options={allKeys}
      onChange={handleKeyChange}
      placeholder="Select key..."
      value={value}
    />
  );
};

export const SelectOperator = ({ operators, handleKeyChange, value }) => {
  return (
    <SelectInput
      name="operator"
      options={operators}
      onChange={handleKeyChange}
      placeholder="Select operator..."
      value={value}
    />
  );
};

export const SelectValue = ({ values, handleKeyChange, value }) => {
  return (
    <SelectInput
      name="select-value"
      options={values}
      onChange={handleKeyChange}
      placeholder="Select value..."
      value={value}
    />
  );
};
