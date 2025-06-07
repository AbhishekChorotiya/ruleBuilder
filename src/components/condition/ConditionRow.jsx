import { ConditionLabel } from "./ConditionLabel";
import { ConditionInputs } from "./ConditionInputs";
import { allKeys } from "../../utils/constants";

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
}) => {
  const handleKeyChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "key-item":
        updateCondition(condition.id, "selectedKey", value);
        break;
      case "operator":
        updateCondition(condition.id, "selectedOperator", value);
        break;
      case "select-value":
        updateCondition(condition.id, "selectedValue", value);
        break;
      case "key-input":
        updateCondition(condition.id, "keyInput", value);
        break;
      case "value-input":
        updateCondition(condition.id, "valueInput", value);
        break;
    }
  };

  return (
    <div className="flex min-h-16 w-full items-center gap-4">
      {isFirst ? (
        <ConditionLabel />
      ) : (
        <div>
          <span className="flex items-center rounded-lg bg-orange-100 p-2 px-4 font-semibold text-orange-800">
            AND
          </span>
        </div>
      )}
      <ConditionInputs
        inputSequenceValue={inputSequenceValue}
        allKeys={allKeys}
        operators={operators}
        valuesForSelectedKey={valuesForSelectedKey}
        handleKeyChange={handleKeyChange}
        condition={condition}
      />
      {showRemoveButton && (
        <button
          onClick={() => removeCondition(condition.id)}
          className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
          title="Remove condition"
        >
          ×
        </button>
      )}
    </div>
  );
};
