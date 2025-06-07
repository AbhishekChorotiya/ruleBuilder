# Condition Component Context

## File: `src/features/rule-builder/components/Condition.jsx`

## Purpose

Main condition management component that handles the logic for rendering and managing multiple conditions within a group. Acts as the orchestrator for condition operations and data flow.

## Component Responsibilities

1. **Condition Management**: Add, remove, and update conditions within a group
2. **Data Processing**: Transform constants into usable data for child components
3. **Event Coordination**: Handle condition-level events and state updates
4. **UI Orchestration**: Render ConditionRow components with proper data

## Props Interface

```javascript
{
  groupId: number,    // Unique identifier for the parent group
  groupIndex: number, // Array index for the group
  form: object,       // React Final Form instance
  values: object      // Current form values
}
```

## Dependencies

```javascript
import { IoAdd } from "react-icons/io5";
import { ConditionRow } from "./condition/ConditionRow";
import {
  allKeyTypes,
  allOperators,
  allVariantValues,
  inputSequence,
  allKeys,
} from "../../../utils/constants";
```

## State Integration

Uses React Final Form integration:

- `form.change()`: Update form values programmatically
- `values.groups`: Access current groups array from form state
- Direct array manipulation for CRUD operations
- Automatic timestamp updates via `form.change("metadata.updatedAt")`

## Core Logic

### Data Processing Function

```javascript
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
```

**Purpose**: Transforms condition data and constants into usable props for ConditionRow components.

### Event Handlers

```javascript
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
```

## Component Structure

### Condition List

- Maps through conditions array from `getGroupConditions(groupId)`
- Renders `ConditionRow` for each condition with processed data
- Provides unique React keys using `condition.id`

### Add Condition Button

- Blue text button with "+" icon
- Triggers `handleAddCondition` on click
- Always visible for easy condition addition

## Data Flow

### Initialization

1. Component receives `groupId` prop
2. Calls `getGroupConditions(groupId)` to get condition array
3. Maps through conditions to render ConditionRow components

### Condition Processing

1. For each condition, calls `getConditionData(condition)`
2. Extracts `selectedKeyType` from `allKeyTypes`
3. Gets available operators from `allOperators`
4. Gets enum values from `allVariantValues` if applicable
5. Gets input sequence from `inputSequence`

### Event Handling

1. User interactions in ConditionRow trigger event handlers
2. Event handlers call appropriate context methods
3. Context updates state, causing re-render
4. New data flows down to ConditionRow components

## Props Passed to ConditionRow

```javascript
<ConditionRow
  key={condition.id}
  condition={condition} // Complete condition object
  updateCondition={handleUpdateCondition} // Update function
  removeCondition={handleRemoveCondition} // Remove function
  showRemoveButton={conditions.length > 1} // Visibility logic
  isFirst={index === 0} // First condition flag
  operators={operators} // Available operators
  valuesForSelectedKey={valuesForSelectedKey} // Enum values
  inputSequenceValue={inputSequenceValue} // UI flow sequence
/>
```

## Business Logic

### Condition Validation

- **Minimum Conditions**: At least one condition per group
- **Remove Button Logic**: Only show when multiple conditions exist
- **First Condition**: Special handling for first condition in group

### Data Transformation

- **Type Resolution**: Maps selectedKey to data type
- **Operator Filtering**: Shows only relevant operators for data type
- **Value Population**: Provides enum values for dropdown population
- **UI Sequence**: Determines input component rendering order

### State Synchronization

- **Automatic Updates**: Changes propagate through context immediately
- **Field Dependencies**: Related fields reset when key changes
- **Validation**: Type-based validation through constants

## Integration Points

### Parent Component (Group.jsx)

- **Receives**: `groupId` prop for group identification
- **Isolation**: No direct communication with other groups

### Child Components (ConditionRow)

- **Provides**: All necessary data and event handlers
- **Delegation**: Delegates UI rendering to ConditionRow
- **Data Processing**: Handles all data transformation before passing down

### Context Integration

- **State Access**: Direct access to condition-related state methods
- **Event Propagation**: All user actions flow through context
- **Data Consistency**: Ensures consistent data across components

## Performance Considerations

### Efficient Rendering

- **React Keys**: Uses `condition.id` for efficient list updates
- **Memoization Ready**: Data processing could be memoized
- **Selective Updates**: Only affected conditions re-render

### Data Processing

- **On-demand**: Data processing happens during render
- **Lightweight**: Simple object transformations
- **Cacheable**: Results could be cached for performance

## Error Handling

- **Safe Defaults**: Uses empty arrays as fallbacks
- **Null Checks**: Safe access to constants and state
- **Graceful Degradation**: Works even with missing data

## Styling

- **Layout**: `flex w-full flex-col gap-4` for vertical stacking
- **Spacing**: `gap-4` provides consistent spacing between conditions
- **Button Styling**: `rounded-lg text-blue-500` for add button

## Future Enhancement Areas

### Performance Optimization

- **Memoization**: Memoize `getConditionData` results
- **Virtual Scrolling**: For groups with many conditions
- **Lazy Loading**: Load condition data on demand

### Functionality Enhancements

- **Condition Templates**: Predefined condition configurations
- **Bulk Operations**: Select and modify multiple conditions
- **Condition Validation**: Real-time validation feedback
- **Condition Grouping**: Sub-groups within conditions

### User Experience

- **Drag and Drop**: Reorder conditions within group
- **Keyboard Shortcuts**: Quick condition operations
- **Auto-complete**: Smart suggestions for condition values
- **Condition Preview**: Show condition evaluation preview

### Data Management

- **Condition History**: Track condition changes
- **Condition Export**: Export individual conditions
- **Condition Import**: Import conditions from templates
- **Condition Analytics**: Usage statistics and optimization

## Testing Strategy

- **Unit Tests**: Test data processing functions
- **Integration Tests**: Test context integration
- **Event Tests**: Test event handler functionality
- **Rendering Tests**: Test condition list rendering

## Component Dependencies

- **React**: Core React functionality
- **ConditionRow**: Child component for individual conditions
- **RuleBuilderContext**: State management integration
- **Constants**: Payment domain constants and configurations

## Architecture Patterns

- **Container Component**: Manages data and delegates rendering
- **Event Delegation**: Handles events and passes to context
- **Data Transformation**: Processes raw data for child components
- **Composition**: Composes with ConditionRow for complete functionality
