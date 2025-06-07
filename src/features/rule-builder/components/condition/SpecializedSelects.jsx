// Specialized select components
export const SelectKeyItem = ({ allKeys, handleKeyChange, condition }) => {
  return (
    <select
      name="key-item"
      className="rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      value={condition.paymentCriteria}
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
      className="rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      value={condition.comparisonOperator}
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
      className="rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      value={condition.criteriaValue}
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
