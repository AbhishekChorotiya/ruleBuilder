import { IoAdd } from "react-icons/io5";
import { ConditionRow } from "./condition/ConditionRow";
import {
  allKeyTypes,
  allOperators,
  allVariantValues,
  inputSequence,
  allKeys,
} from "../../../utils/constants";

export const Condition = ({ groupId, groupIndex, form, values }) => {
  // Get conditions for the current group
  const getGroupConditions = (groupId) => {
    const groups = values.groups || [];
    const group = groups.find((g) => g.id === groupId);
    return group ? group.conditions : [];
  };

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
    const groups = values.groups || [];
    const groupIndex = groups.findIndex((g) => g.id === groupId);

    if (groupIndex !== -1) {
      const group = groups[groupIndex];
      const newConditionId = Math.max(...group.conditions.map((c) => c.id)) + 1;
      const newCondition = {
        id: newConditionId,
        paymentCriteria: allKeys[0],
        criteriaValue: "",
        comparisonOperator: "",
        metadataKey: "",
        metadataValue: "",
      };

      const updatedGroups = [...groups];
      updatedGroups[groupIndex] = {
        ...group,
        conditions: [...group.conditions, newCondition],
      };

      form.change("groups", updatedGroups);
      form.change("metadata.updatedAt", new Date().toISOString());
    }
  };

  const handleRemoveCondition = (conditionId) => {
    const groups = values.groups || [];
    const groupIndex = groups.findIndex((g) => g.id === groupId);

    if (groupIndex !== -1) {
      const group = groups[groupIndex];
      if (group.conditions.length > 1) {
        const updatedConditions = group.conditions.filter(
          (c) => c.id !== conditionId,
        );
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = {
          ...group,
          conditions: updatedConditions,
        };

        form.change("groups", updatedGroups);
        form.change("metadata.updatedAt", new Date().toISOString());
      }
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-4">
        {conditions.map((condition, conditionIndex) => {
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
              removeCondition={handleRemoveCondition}
              showRemoveButton={conditions.length > 1}
              isFirst={conditionIndex === 0}
              operators={operators}
              valuesForSelectedKey={valuesForSelectedKey}
              inputSequenceValue={inputSequenceValue}
              selectedKeyType={selectedKeyType}
              groupIndex={groupIndex}
              conditionIndex={conditionIndex}
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
