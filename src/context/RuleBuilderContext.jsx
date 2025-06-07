import React, { createContext, useContext } from "react";
import { useRuleBuilderState } from "../hooks/useRuleBuilderState";

// Create the context
const RuleBuilderContext = createContext();

// Create the provider component
export const RuleBuilderProvider = ({ children }) => {
  const ruleBuilderState = useRuleBuilderState();

  return (
    <RuleBuilderContext.Provider value={ruleBuilderState}>
      {children}
    </RuleBuilderContext.Provider>
  );
};

// Custom hook to use the context
export const useRuleBuilderContext = () => {
  const context = useContext(RuleBuilderContext);
  if (!context) {
    throw new Error(
      "useRuleBuilderContext must be used within a RuleBuilderProvider",
    );
  }
  return context;
};
