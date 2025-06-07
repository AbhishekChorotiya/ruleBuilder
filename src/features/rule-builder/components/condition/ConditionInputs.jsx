import { InputRenderer } from "./InputRenderer";

// Condition inputs container
export const ConditionInputs = ({
  inputSequenceValue,
  allKeys,
  operators,
  valuesForSelectedKey,
  groupIndex,
  conditionIndex,
  selectedKeyType,
}) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center gap-4 rounded-lg bg-gray-100 px-4 py-2">
      {inputSequenceValue.map((inputType, index) => (
        <InputRenderer
          key={index}
          inputType={inputType}
          allKeys={allKeys}
          operators={operators}
          valuesForSelectedKey={valuesForSelectedKey}
          groupIndex={groupIndex}
          conditionIndex={conditionIndex}
          selectedKeyType={selectedKeyType}
        />
      ))}
    </div>
  );
};
