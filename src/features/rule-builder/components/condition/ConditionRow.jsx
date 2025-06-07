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
    <div className="condition-row">
      {isFirst ? (
        <ConditionLabel />
      ) : (
        <div className="condition-row__and-badge">
          <span className="condition-row__and-text">AND</span>
        </div>
      )}

      <div className="condition-row__inputs">
        <ConditionInputs
          inputSequenceValue={inputSequenceValue}
          allKeys={allKeys}
          operators={operators}
          valuesForSelectedKey={valuesForSelectedKey}
          handleKeyChange={handleKeyChange}
          condition={condition}
        />
      </div>

      {showRemoveButton && (
        <button
          onClick={() => removeCondition(condition.id)}
          className="condition-row__remove-btn"
          title="Remove condition"
          type="button"
        >
          <IoClose className="condition-row__remove-icon" />
        </button>
      )}
    </div>
  );
};
