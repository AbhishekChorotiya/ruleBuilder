import { IoAdd } from "react-icons/io5";
import { ConditionRow } from "./condition/ConditionRow";
import { useRuleBuilderContext } from "../context/RuleBuilderContext";
import {
  allKeyTypes,
  allOperators,
  allVariantValues,
  inputSequence,
} from "../../../utils/constants";

export const Condition = ({ groupId }) => {
  const { getGroupConditions, addCondition, removeCondition, updateCondition } =
    useRuleBuilderContext();

  const conditions = getGroupConditions(groupId);

  const getConditionData = (condition) => {
    const selectedKeyType = allKeyTypes[condition.selectedKey];
    const operators = allOperators[selectedKeyType] || [];
    const valuesForSelectedKey =
      selectedKeyType === "enum_variant"
        ? allVariantValues[condition.selectedKey]
        : [];
    const inputSequenceValue = inputSequence[selectedKeyType] || [];

    return {
      selectedKeyType,
      operators,
      valuesForSelectedKey,
      inputSequenceValue,
    };
  };

  const handleAddCondition = () => {
    addCondition(groupId);
  };

  const handleRemoveCondition = (conditionId) => {
    removeCondition(groupId, conditionId);
  };

  const handleUpdateCondition = (conditionId, field, value) => {
    updateCondition(groupId, conditionId, field, value);
  };

  return (
    <div className="condition">
      <div className="condition__list">
        {conditions.map((condition, index) => {
          const { operators, valuesForSelectedKey, inputSequenceValue } =
            getConditionData(condition);

          return (
            <ConditionRow
              key={condition.id}
              condition={condition}
              updateCondition={handleUpdateCondition}
              removeCondition={handleRemoveCondition}
              showRemoveButton={conditions.length > 1}
              isFirst={index === 0}
              operators={operators}
              valuesForSelectedKey={valuesForSelectedKey}
              inputSequenceValue={inputSequenceValue}
            />
          );
        })}
      </div>

      <div className="condition__add">
        <button
          onClick={handleAddCondition}
          className="condition__add-btn"
          type="button"
        >
          <IoAdd className="condition__add-icon" />
          Add Condition
        </button>
      </div>
    </div>
  );
};
