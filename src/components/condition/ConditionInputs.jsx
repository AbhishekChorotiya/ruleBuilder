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
    <div className="flex h-full w-full flex-wrap items-center gap-4 rounded-lg bg-gray-100 p-2 px-4">
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
