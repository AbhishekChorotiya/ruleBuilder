# State Management Context

## Files: `src/features/rule-builder/hooks/useRuleBuilderState.js` & `src/features/rule-builder/context/RuleBuilderContext.jsx`

## Purpose

Centralized state management system for the rule builder application using React hooks and context pattern. Provides a single source of truth for all rule configuration data and operations.

## Architecture Pattern

- **Custom Hook**: `useRuleBuilderState` - Contains all state logic and operations
- **React Context**: `RuleBuilderContext` - Distributes state throughout component tree
- **Provider Pattern**: `RuleBuilderProvider` - Wraps application with context

## State Structure

### Core State Object

```javascript
{
  name: "",                    // Rule name
  description: "",             // Rule description
  groups: [                    // Array of condition groups
    {
      id: 1,                   // Unique group identifier
      operator: "AND",         // Operator between conditions in group
      conditions: [            // Array of conditions in group
        {
          id: 1,               // Unique condition identifier
          paymentCriteria: allKeys[0], // Selected payment criteria key (defaults to first key)
          criteriaValue: "",           // Selected value for enum types
          comparisonOperator: "",      // Comparison operator (equals, greater than, etc.)
          metadataKey: "",             // Custom key input for metadata
          metadataValue: ""            // Custom value input for metadata
        }
      ]
    }
  ],
  betweenGroupsOperator: "OR", // Operator between groups (OR/AND)
  authenticationRequirement: "any", // Authentication requirement (any/all/none)
  isActive: true,              // Rule active status
  metadata: {                  // Rule metadata
    createdAt: "ISO_DATE",     // Creation timestamp
    updatedAt: "ISO_DATE",     // Last update timestamp
    version: "1.0.0"           // Rule version
  }
}
```

### Initial State Configuration

The initial state starts with a single group containing one condition:

- **Single Group**: ID 1 with "AND" operator
- **Single Condition**: ID 1 with default `paymentCriteria` set to `allKeys[0]`
- **Clean Start**: All other fields empty for user input
- **Minimal Setup**: Provides the simplest starting point for rule creation

## State Management Functions

### Group Management

- **`addGroup()`**: Creates new group with default condition
- **`removeGroup(groupId)`**: Removes group (minimum 1 group enforced)
- **`updateGroupOperator(groupId, operator)`**: Updates AND/OR operator for group
- **`getGroup(groupId)`**: Retrieves specific group by ID

### Condition Management

- **`addCondition(groupId)`**: Adds new condition to specified group
- **`removeCondition(groupId, conditionId)`**: Removes condition (minimum 1 per group)
- **`updateCondition(groupId, conditionId, field, value)`**: Updates condition field
- **`getGroupConditions(groupId)`**: Gets all conditions for a group

### Rule Metadata Management

- **`updateRuleName(name)`**: Updates rule name
- **`updateRuleDescription(description)`**: Updates rule description
- **`toggleRuleActive()`**: Toggles rule active status
- **`updateAuthType(authType)`**: Updates authentication type

### Utility Functions

- **`saveRule()`**: Saves and logs complete rule state
- **Auto-timestamp**: All updates automatically update `updatedAt`

## Key Features

### Immutable State Updates

- All state changes create new objects
- Prevents accidental mutations
- Ensures proper React re-renders
- Maintains state history integrity

### Automatic Field Reset

When `paymentCriteria` changes in a condition:

- `comparisonOperator` resets to ""
- `criteriaValue` resets to ""
- `metadataKey` resets to ""
- `metadataValue` resets to ""

### ID Management

- Groups: Auto-incrementing IDs based on existing max ID
- Conditions: Auto-incrementing IDs within each group
- Ensures unique identifiers for React keys

### Validation Rules

- **Minimum Groups**: At least 1 group must exist
- **Minimum Conditions**: At least 1 condition per group
- **Type Safety**: Consistent data structure enforcement

## Context Integration

### Provider Setup

```javascript
<RuleBuilderProvider>
  <App />
</RuleBuilderProvider>
```

### Hook Usage

```javascript
const {
  ruleState,
  addGroup,
  removeGroup,
  addCondition,
  updateCondition,
  saveRule,
} = useRuleBuilderContext();
```

### Error Handling

- Context usage validation
- Throws error if used outside provider
- Prevents undefined context access

## Dependencies

- **React**: `useState` hook for state management
- **Constants**: `allKeys` from utils for default values

## Performance Optimizations

- **Selective Updates**: Only affected components re-render
- **Memoization Ready**: State structure supports React.memo
- **Efficient Lookups**: Direct ID-based operations
- **Minimal State Changes**: Targeted updates only

## Data Flow Pattern

1. **User Action** → Component event handler
2. **Context Method** → State management function
3. **State Update** → Immutable state change
4. **Re-render** → Components with changed data update
5. **UI Update** → Visual changes reflect new state

## Integration with Constants

- **Default Values**: Uses `allKeys[0]` for new conditions
- **Type Validation**: Integrates with `allKeyTypes`
- **Operator Selection**: Works with `allOperators`
- **Value Options**: Supports `allVariantValues`

## Debugging Features

- **Console Logging**: `saveRule()` logs complete state
- **Timestamp Tracking**: Automatic update timestamps
- **Version Control**: Version field for rule tracking
- **State Inspection**: Easy state debugging in dev tools

## Error Prevention

- **Null Checks**: Safe array operations
- **Boundary Conditions**: Minimum count enforcement
- **Type Consistency**: Structured data validation
- **Default Values**: Fallback values for all fields

## Future Enhancement Areas

- **Undo/Redo**: State history management
- **Validation**: Rule validation system
- **Persistence**: Local storage integration
- **Import/Export**: Rule serialization
- **Performance**: State normalization for large rules
