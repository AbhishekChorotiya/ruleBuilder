import { InputRenderer } from "./InputRenderer";

// Condition inputs container
export const ConditionInputs = ({
  inputSequenceValue,
  allKeys,
  operators,
  valuesForSelectedKey,
  handleKeyChange,
  condition,
}) => {
  return (
    <div className="condition-inputs">
      {inputSequenceValue.map((inputType, index) => (
        <InputRenderer
          key={index}
          inputType={inputType}
          index={index}
          allKeys={allKeys}
          operators={operators}
          valuesForSelectedKey={valuesForSelectedKey}
          handleKeyChange={handleKeyChange}
          condition={condition}
        />
      ))}
    </div>
  );
};
