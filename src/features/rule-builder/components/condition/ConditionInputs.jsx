import { InputRenderer } from "./InputRenderer";

// Condition inputs container
export const ConditionInputs = ({
  inputSequenceValue,
  allKeys,
  operators,
  valuesForSelectedKey,
  handleKeyChange,
  condition,
  selectedKeyType, // Add selectedKeyType prop
}) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center gap-4 rounded-lg bg-gray-100 px-4 py-2">
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
          selectedKeyType={selectedKeyType} // Pass selectedKeyType to InputRenderer
        />
      ))}
    </div>
  );
};
