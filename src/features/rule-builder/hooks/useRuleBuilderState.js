import { useState } from "react";
import { allKeys } from "../../../utils/constants";

// Centralized state management for the entire rule builder
export const useRuleBuilderState = () => {
  const [ruleState, setRuleState] = useState({
    name: "",
    description: "",
    groups: [
      {
        id: 1,
        operator: "AND", // AND/OR between conditions within a group
        conditions: [
          {
            id: 1,
            paymentCriteria: allKeys[0],
            criteriaValue: "",
            comparisonOperator: "",
            metadataKey: "",
            metadataValue: "",
          },
        ],
      },
      {
        id: 2,
        operator: "AND",
        conditions: [
          {
            id: 1,
            paymentCriteria: allKeys[0],
            criteriaValue: "",
            comparisonOperator: "",
            metadataKey: "",
            metadataValue: "",
          },
        ],
      },
    ],
    betweenGroupsOperator: "OR", // OR between groups
    authenticationRequirement: "any",
    isActive: true,
    metadata: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: "1.0.0",
    },
  });

  // Group management functions
  const addGroup = () => {
    const newId = Math.max(...ruleState.groups.map((g) => g.id)) + 1;
    const newGroup = {
      id: newId,
      operator: "AND",
      conditions: [
        {
          id: 1,
          paymentCriteria: allKeys[0],
          criteriaValue: "",
          comparisonOperator: "",
          metadataKey: "",
          metadataValue: "",
        },
      ],
    };

    setRuleState((prev) => ({
      ...prev,
      groups: [...prev.groups, newGroup],
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const removeGroup = (groupId) => {
    if (ruleState.groups.length > 1) {
      setRuleState((prev) => ({
        ...prev,
        groups: prev.groups.filter((group) => group.id !== groupId),
        metadata: {
          ...prev.metadata,
          updatedAt: new Date().toISOString(),
        },
      }));
    }
  };

  const updateGroupOperator = (groupId, operator) => {
    setRuleState((prev) => ({
      ...prev,
      groups: prev.groups.map((group) =>
        group.id === groupId ? { ...group, operator } : group,
      ),
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  // Condition management functions
  const addCondition = (groupId) => {
    setRuleState((prev) => ({
      ...prev,
      groups: prev.groups.map((group) => {
        if (group.id === groupId) {
          const newConditionId =
            Math.max(...group.conditions.map((c) => c.id)) + 1;
          const newCondition = {
            id: newConditionId,
            paymentCriteria: allKeys[0],
            criteriaValue: "",
            comparisonOperator: "",
            metadataKey: "",
            metadataValue: "",
          };
          return {
            ...group,
            conditions: [...group.conditions, newCondition],
          };
        }
        return group;
      }),
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const removeCondition = (groupId, conditionId) => {
    setRuleState((prev) => ({
      ...prev,
      groups: prev.groups.map((group) => {
        if (group.id === groupId && group.conditions.length > 1) {
          return {
            ...group,
            conditions: group.conditions.filter((c) => c.id !== conditionId),
          };
        }
        return group;
      }),
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const updateCondition = (groupId, conditionId, field, value) => {
    setRuleState((prev) => ({
      ...prev,
      groups: prev.groups.map((group) => {
        if (group.id === groupId) {
          return {
            ...group,
            conditions: group.conditions.map((condition) => {
              if (condition.id === conditionId) {
                const updatedCondition = { ...condition, [field]: value };

                // Reset dependent fields when key changes
                if (field === "paymentCriteria") {
                  updatedCondition.comparisonOperator = "";
                  updatedCondition.criteriaValue = "";
                  updatedCondition.metadataKey = "";
                  updatedCondition.metadataValue = "";
                }

                return updatedCondition;
              }
              return condition;
            }),
          };
        }
        return group;
      }),
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  // Auth type management
  const updateAuthType = (authType) => {
    setRuleState((prev) => ({
      ...prev,
      authenticationRequirement: authType,
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  // Rule metadata management
  const updateRuleName = (name) => {
    setRuleState((prev) => ({
      ...prev,
      name,
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const updateRuleDescription = (description) => {
    setRuleState((prev) => ({
      ...prev,
      description,
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const toggleRuleActive = () => {
    setRuleState((prev) => ({
      ...prev,
      isActive: !prev.isActive,
      metadata: {
        ...prev.metadata,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  // Get conditions for a specific group
  const getGroupConditions = (groupId) => {
    const group = ruleState.groups.find((g) => g.id === groupId);
    return group ? group.conditions : [];
  };

  // Get group by ID
  const getGroup = (groupId) => {
    return ruleState.groups.find((g) => g.id === groupId);
  };

  // Save rule function
  const saveRule = () => {
    const ruleToSave = {
      ...ruleState,
      metadata: {
        ...ruleState.metadata,
        updatedAt: new Date().toISOString(),
      },
    };

    console.log("=== RULE BUILDER STATE ===");
    console.log(JSON.stringify(ruleToSave, null, 2));
    console.log("=== END RULE STATE ===");

    return ruleToSave;
  };

  return {
    // State
    ruleState,

    // Group management
    addGroup,
    removeGroup,
    updateGroupOperator,
    getGroup,

    // Condition management
    addCondition,
    removeCondition,
    updateCondition,
    getGroupConditions,

    // Auth type management
    updateAuthType,

    // Rule metadata management
    updateRuleName,
    updateRuleDescription,
    toggleRuleActive,

    // Save function
    saveRule,
  };
};
