import { IoClose } from "react-icons/io5";
import { ConditionLabel } from "./ConditionLabel";
import { ConditionInputs } from "./ConditionInputs";
import { allKeys } from "../../../../utils/constants";

// Individual condition row component
export const ConditionRow = ({
  condition,
  removeCondition,
  showRemoveButton,
  isFirst,
  operators,
  valuesForSelectedKey,
  inputSequenceValue,
  selectedKeyType,
  groupIndex,
  conditionIndex,
}) => {
  return (
    <div className="flex min-h-16 w-full items-center gap-4">
      <ConditionLabel labelType={isFirst ? "IF" : "AND"} />

      <div className="flex-1">
        <ConditionInputs
          inputSequenceValue={inputSequenceValue}
          allKeys={allKeys}
          operators={operators}
          valuesForSelectedKey={valuesForSelectedKey}
          groupIndex={groupIndex}
          conditionIndex={conditionIndex}
          selectedKeyType={selectedKeyType}
        />
      </div>

      {showRemoveButton && (
        <button
          onClick={() => removeCondition(condition.id)}
          className="flex items-center justify-center rounded-lg bg-red-500 p-2 text-white transition-colors hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
          title="Remove condition"
          type="button"
        >
          <IoClose className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
