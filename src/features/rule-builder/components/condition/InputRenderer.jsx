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
  handleKeyChange,
  condition,
  selectedKeyType, // Add selectedKeyType prop
}) => {
  const inputComponents = {
    "key-item": (
      <SelectKeyItem
        allKeys={allKeys}
        handleKeyChange={handleKeyChange}
        condition={condition}
      />
    ),
    operator: (
      <SelectOperator
        operators={operators}
        handleKeyChange={handleKeyChange}
        condition={condition}
      />
    ),
    "select-value": (
      <SelectValue
        valuesForSelectedKey={valuesForSelectedKey}
        handleKeyChange={handleKeyChange}
        condition={condition}
      />
    ),
    "value-input": (
      <TextInput
        name="value-input"
        placeholder="Enter value"
        handleKeyChange={handleKeyChange}
        condition={condition}
        inputType={selectedKeyType} // Pass selectedKeyType as inputType prop
      />
    ),
    "key-input": (
      <TextInput
        name="key-input"
        placeholder="Enter key"
        handleKeyChange={handleKeyChange}
        condition={condition}
        inputType={selectedKeyType} // Pass selectedKeyType as inputType prop
      />
    ),
  };

  return (
    <InputWrapper>
      {inputComponents[inputType] || <div>Unknown input type</div>}
    </InputWrapper>
  );
};
