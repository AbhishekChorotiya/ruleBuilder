import { IoClose } from "react-icons/io5";
import { ConditionLabel } from "./ConditionLabel";
import { ConditionInputs } from "./ConditionInputs";
import { allKeys } from "../../../../utils/constants";

// Individual condition row component
export const ConditionRow = ({
  condition,
  updateCondition,
  removeCondition,
  showRemoveButton,
  isFirst,
  operators,
  valuesForSelectedKey,
  inputSequenceValue,
  selectedKeyType, // Add selectedKeyType prop
}) => {
  const handleKeyChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "key-item":
        updateCondition(condition.id, "paymentCriteria", value);
        break;
      case "operator":
        updateCondition(condition.id, "comparisonOperator", value);
        break;
      case "select-value":
        updateCondition(condition.id, "criteriaValue", value);
        break;
      case "key-input":
        updateCondition(condition.id, "metadataKey", value);
        break;
      case "value-input":
        // For metadata_value type, use metadataValue
        // For str_value and number types, use criteriaValue
        if (selectedKeyType === "metadata_value") {
          updateCondition(condition.id, "metadataValue", value);
        } else {
          updateCondition(condition.id, "criteriaValue", value);
        }
        break;
    }
  };

  return (
    <div className="flex min-h-16 w-full items-center gap-4">
      {isFirst ? (
        <ConditionLabel />
      ) : (
        <div className="flex items-center">
          <span className="flex items-center rounded-lg bg-orange-200 px-4 py-2 font-semibold text-orange-800">
            AND
          </span>
        </div>
      )}

      <div className="flex-1">
        <ConditionInputs
          inputSequenceValue={inputSequenceValue}
          allKeys={allKeys}
          operators={operators}
          valuesForSelectedKey={valuesForSelectedKey}
          handleKeyChange={handleKeyChange}
          condition={condition}
          selectedKeyType={selectedKeyType} // Pass selectedKeyType to ConditionInputs
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
