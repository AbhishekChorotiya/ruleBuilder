# Rule Builder State Structure

This document describes the centralized state management structure implemented for the rule builder application.

## State Structure

The rule builder state follows a proper hierarchical structure that represents a complete rule configuration:

```json
{
  "name": "",
  "description": "",
  "groups": [
    {
      "id": 1,
      "operator": "AND",
      "conditions": [
        {
          "id": 1,
          "selectedKey": "payment_method",
          "selectedValue": "",
          "selectedOperator": "",
          "keyInput": "",
          "valueInput": ""
        }
      ]
    }
  ],
  "groupOperator": "OR",
  "authType": "any",
  "isActive": true,
  "metadata": {
    "createdAt": "2025-06-07T01:21:20.664Z",
    "updatedAt": "2025-06-07T01:22:49.297Z",
    "version": "1.0.0"
  }
}
```

## State Management Features

### 1. Centralized State

- All state is managed in a single location (`src/hooks/useRuleBuilderState.js`)
- No more scattered state across components
- Single source of truth for the entire rule configuration

### 2. Proper Rule Builder Structure

- **Rule Metadata**: name, description, isActive status, version, timestamps
- **Groups**: Collection of condition groups with logical operators
- **Conditions**: Individual conditions within each group
- **Group Operator**: Logical operator between groups (OR/AND)
- **Auth Type**: Authentication type selection
- **Metadata**: Creation and update timestamps, version tracking

### 3. State Management Functions

#### Group Management

- `addGroup()`: Add a new group
- `removeGroup(groupId)`: Remove a specific group
- `updateGroupOperator(groupId, operator)`: Update operator for a group
- `getGroup(groupId)`: Get a specific group

#### Condition Management

- `addCondition(groupId)`: Add condition to a specific group
- `removeCondition(groupId, conditionId)`: Remove condition from a group
- `updateCondition(groupId, conditionId, field, value)`: Update condition field
- `getGroupConditions(groupId)`: Get all conditions for a group

#### Auth Type Management

- `updateAuthType(authType)`: Update the authentication type

#### Rule Metadata Management

- `updateRuleName(name)`: Update rule name
- `updateRuleDescription(description)`: Update rule description
- `toggleRuleActive()`: Toggle rule active status

#### Save Function

- `saveRule()`: Save and log the complete rule state

### 4. Automatic State Updates

- All state changes automatically update the `updatedAt` timestamp
- State changes are immutable and follow React best practices
- Dependent fields are automatically reset when parent fields change

## Implementation Benefits

1. **Centralized Management**: All state logic is in one place
2. **Proper Structure**: Follows industry-standard rule builder patterns
3. **Scalability**: Easy to add new features and fields
4. **Maintainability**: Clear separation of concerns
5. **Type Safety**: Consistent data structure throughout the application
6. **Audit Trail**: Automatic timestamp tracking for changes
7. **Immutable Updates**: Prevents state mutation bugs

## Usage Example

```javascript
import { useRuleBuilderState } from '../hooks/useRuleBuilderState';

function MyComponent() {
  const {
    ruleState,
    addGroup,
    removeGroup,
    addCondition,
    updateCondition,
    updateAuthType,
    saveRule
  } = useRuleBuilderState();

  // Use the state and functions as needed
  const handleSave = () => {
    const savedRule = saveRule();
    // Rule is automatically logged to console
  };

  return (
    // Your component JSX
  );
}
```

## File Structure

```
src/
├── hooks/
│   └── useRuleBuilderState.js    # Centralized state management
├── components/
│   ├── App.jsx                   # Main app component
│   ├── Group.jsx                 # Group component
│   └── Condition.jsx             # Condition component
└── utils/
    └── constants.js              # Rule builder constants
```

This structure provides a robust, scalable foundation for the rule builder application with proper state management and a clear data model.
