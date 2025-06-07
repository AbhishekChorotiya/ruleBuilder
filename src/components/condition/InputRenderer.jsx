import {
  SelectKeyItem,
  SelectOperator,
  SelectValue,
} from "./SpecializedSelects";
import { TextInput } from "./TextInput";

// Input renderer component
export const InputRenderer = ({
  inputType,
  allKeys,
  operators,
  valuesForSelectedKey,
  handleKeyChange,
  condition,
}) => {
  const inputComponents = {
    "key-item": (
      <SelectKeyItem
        allKeys={allKeys}
        handleKeyChange={handleKeyChange}
        value={condition.selectedKey}
      />
    ),
    operator: (
      <SelectOperator
        operators={operators}
        handleKeyChange={handleKeyChange}
        value={condition.selectedOperator}
      />
    ),
    "select-value": (
      <SelectValue
        values={valuesForSelectedKey}
        handleKeyChange={handleKeyChange}
        value={condition.selectedValue}
      />
    ),
    "value-input": (
      <TextInput
        inputType={inputType}
        placeholder="Enter value..."
        value={condition.valueInput}
        onChange={handleKeyChange}
      />
    ),
    "key-input": (
      <TextInput
        inputType={inputType}
        placeholder="Enter key..."
        value={condition.keyInput}
        onChange={handleKeyChange}
      />
    ),
  };

  return inputComponents[inputType] || null;
};
