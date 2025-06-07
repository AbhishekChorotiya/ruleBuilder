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
    const selectedKeyType = allKeyTypes[condition.paymentCriteria];
    const operators = allOperators[selectedKeyType] || [];
    const valuesForSelectedKey =
      selectedKeyType === "enum_variant"
        ? allVariantValues[condition.paymentCriteria]
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
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-4">
        {conditions.map((condition, index) => {
          const {
            selectedKeyType,
            operators,
            valuesForSelectedKey,
            inputSequenceValue,
          } = getConditionData(condition);

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
              selectedKeyType={selectedKeyType}
            />
          );
        })}
      </div>

      <div className="mt-4 flex w-full justify-start">
        <button
          onClick={handleAddCondition}
          className="flex items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-blue-500 transition-colors hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          type="button"
        >
          <IoAdd className="h-4 w-4" />
          Add Condition
        </button>
      </div>
    </div>
  );
};
