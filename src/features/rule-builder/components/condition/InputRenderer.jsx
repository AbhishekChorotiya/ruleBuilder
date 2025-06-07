import { InputWrapper } from "./InputWrapper";
import {
  SelectKeyItem,
  SelectOperator,
  SelectValue,
} from "./SpecializedSelects";
import { TextInput } from "./TextInput";

// Input renderer factory component
export const InputRenderer = ({
  inputType,
  allKeys,
  operators,
  valuesForSelectedKey,
  groupIndex,
  conditionIndex,
  selectedKeyType,
}) => {
  // Generate proper field names using array indices for React Final Form
  const getFieldName = (field) => {
    return `groups[${groupIndex}].conditions[${conditionIndex}].${field}`;
  };

  const inputComponents = {
    "key-item": (
      <SelectKeyItem
        allKeys={allKeys}
        fieldName={getFieldName("paymentCriteria")}
      />
    ),
    operator: (
      <SelectOperator
        operators={operators}
        fieldName={getFieldName("comparisonOperator")}
      />
    ),
    "select-value": (
      <SelectValue
        valuesForSelectedKey={valuesForSelectedKey}
        fieldName={getFieldName("criteriaValue")}
      />
    ),
    "value-input": (
      <TextInput
        fieldName={
          selectedKeyType === "metadata_value"
            ? getFieldName("metadataValue")
            : getFieldName("criteriaValue")
        }
        placeholder="Enter value"
      />
    ),
    "key-input": (
      <TextInput
        fieldName={getFieldName("metadataKey")}
        placeholder="Enter key"
      />
    ),
  };

  return (
    <InputWrapper>
      {inputComponents[inputType] || <div>Unknown input type</div>}
    </InputWrapper>
  );
};
