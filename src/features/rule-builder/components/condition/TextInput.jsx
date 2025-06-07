import { Field } from "react-final-form";

// Text input component using React Final Form Field
export const TextInput = ({ fieldName, placeholder = "Enter value..." }) => {
  return (
    <Field name={fieldName}>
      {({ input }) => (
        <input
          {...input}
          type="text"
          placeholder={placeholder}
          className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      )}
    </Field>
  );
};
