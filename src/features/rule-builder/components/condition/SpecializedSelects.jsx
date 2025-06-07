// Specialized select components
export const SelectKeyItem = ({ allKeys, handleKeyChange, condition }) => {
  return (
    <select
      name="key-item"
      className="select-input"
      value={condition.selectedKey}
      onChange={handleKeyChange}
    >
      {allKeys.map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
};

export const SelectOperator = ({ operators, handleKeyChange, condition }) => {
  return (
    <select
      name="operator"
      className="select-input"
      value={condition.selectedOperator}
      onChange={handleKeyChange}
    >
      <option value="">Select operator...</option>
      {operators.map((operator) => (
        <option key={operator} value={operator}>
          {operator}
        </option>
      ))}
    </select>
  );
};

export const SelectValue = ({
  valuesForSelectedKey,
  handleKeyChange,
  condition,
}) => {
  return (
    <select
      name="select-value"
      className="select-input"
      value={condition.selectedValue}
      onChange={handleKeyChange}
    >
      <option value="">Select value...</option>
      {valuesForSelectedKey.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
