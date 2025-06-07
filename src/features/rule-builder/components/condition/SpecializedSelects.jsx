import { Field } from "react-final-form";

// Specialized select components using React Final Form Field
export const SelectKeyItem = ({ allKeys, fieldName }) => {
  return (
    <Field name={fieldName}>
      {({ input }) => (
        <select
          {...input}
          className="rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {allKeys.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
};

export const SelectOperator = ({ operators, fieldName }) => {
  return (
    <Field name={fieldName}>
      {({ input }) => (
        <select
          {...input}
          className="rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select operator...</option>
          {operators.map((operator) => (
            <option key={operator} value={operator}>
              {operator}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
};

export const SelectValue = ({ valuesForSelectedKey, fieldName }) => {
  return (
    <Field name={fieldName}>
      {({ input }) => (
        <select
          {...input}
          className="rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select value...</option>
          {valuesForSelectedKey.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
};
