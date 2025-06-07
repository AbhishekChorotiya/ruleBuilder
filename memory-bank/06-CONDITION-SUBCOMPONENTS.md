# Condition Sub-Components Context

## Directory: `src/features/rule-builder/components/condition/`

## Purpose

Collection of specialized components that handle the detailed UI and logic for individual condition rows. These components work together to create a flexible, type-aware condition building interface.

## Component Architecture

### ConditionRow.jsx - Main Row Component

**Purpose**: Orchestrates the layout and logic for a single condition row.

**Key Responsibilities**:

1. **Layout Management**: Arranges label, inputs, and remove button
2. **Event Coordination**: Handles all input changes and delegates to parent
3. **Conditional Rendering**: Shows AND label or condition label based on position
4. **State Updates**: Maps input events to appropriate condition field updates

**Props Interface**:

```javascript
{
  condition: object,              // Complete condition data
  updateCondition: function,      // Update callback
  removeCondition: function,      // Remove callback
  showRemoveButton: boolean,      // Remove button visibility
  isFirst: boolean,              // First condition in group flag
  operators: array,              // Available operators for this condition
  valuesForSelectedKey: array,   // Enum values for selected key
  inputSequenceValue: array      // UI flow sequence
}
```

**Event Handling Logic**:

```javascript
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
```

**Layout Structure**:

- **Label Section**: ConditionLabel (first) or AND badge (subsequent)
- **Input Section**: ConditionInputs component with all input logic
- **Action Section**: Remove button (when multiple conditions exist)

### InputRenderer.jsx - Dynamic Input Factory

**Purpose**: Factory component that renders the appropriate input component based on input type.

**Component Mapping**:

```javascript
const inputComponents = {
  "key-item": <SelectKeyItem />, // Payment key selection
  operator: <SelectOperator />, // Comparison operator selection
  "select-value": <SelectValue />, // Enum value selection
  "value-input": <TextInput />, // Free text input
  "key-input": <TextInput />, // Metadata key input
};
```

**Props Interface**:

```javascript
{
  inputType: string,              // Type of input to render
  allKeys: array,                // Available payment keys
  operators: array,              // Available operators
  valuesForSelectedKey: array,   // Enum values for dropdowns
  handleKeyChange: function,     // Event handler
  condition: object              // Current condition data
}
```

**Design Pattern**: Factory pattern for dynamic component selection based on input type.

### ConditionInputs.jsx - Input Container

**Purpose**: Container component that manages the sequence of inputs for a condition.

**Key Features**:

- **Dynamic Rendering**: Renders inputs based on `inputSequenceValue`
- **Input Wrapping**: Wraps each input in `InputWrapper` for consistent styling
- **Sequence Management**: Controls the order and visibility of input components

### ConditionLabel.jsx - First Condition Label

**Purpose**: Displays "Where" label for the first condition in a group.

**Styling**: Consistent with AND badges but with different text and color scheme.

### Input Components

#### SpecializedSelects.jsx - Dropdown Components

Contains three specialized select components:

**SelectKeyItem**:

- **Purpose**: Dropdown for selecting payment criteria keys
- **Data Source**: `allKeys` array from constants
- **Styling**: Consistent select styling with payment-specific options

**SelectOperator**:

- **Purpose**: Dropdown for selecting comparison operators
- **Data Source**: `operators` array (filtered by key type)
- **Dynamic Options**: Changes based on selected key's data type

**SelectValue**:

- **Purpose**: Dropdown for selecting enum values
- **Data Source**: `valuesForSelectedKey` array
- **Conditional Rendering**: Only shown for enum_variant types

#### TextInput.jsx - Text Input Component

**Purpose**: Reusable text input for free-form values.

**Features**:

- **Type Support**: Handles different input types (text, number)
- **Placeholder Support**: Dynamic placeholder text
- **Event Handling**: Standardized onChange handling
- **Styling**: Consistent input styling across the application

#### InputWrapper.jsx - Input Container

**Purpose**: Provides consistent styling and layout for all input components.

**Features**:

- **Consistent Spacing**: Standardized margins and padding
- **Responsive Design**: Adapts to different screen sizes
- **Visual Consistency**: Uniform appearance across input types

## Data Flow Architecture

### Input Sequence Flow

1. **Sequence Definition**: `inputSequence` constant defines order
2. **Dynamic Rendering**: `ConditionInputs` maps through sequence
3. **Component Selection**: `InputRenderer` selects appropriate component
4. **Event Propagation**: Events flow back through the hierarchy

### State Update Flow

1. **User Input** → Input component onChange
2. **Event Handling** → `handleKeyChange` in ConditionRow
3. **Field Mapping** → Switch statement maps to condition field
4. **State Update** → `updateCondition` called with field and value
5. **Re-render** → Components re-render with new data

### Data Transformation Flow

1. **Raw Constants** → Processed in parent Condition component
2. **Filtered Data** → Passed down as props to ConditionRow
3. **Component Props** → Distributed to appropriate input components
4. **Rendering** → Components render with processed data

## Integration Patterns

### Type-Aware Rendering

- **Key Type Detection**: `allKeyTypes` determines input sequence
- **Operator Filtering**: `allOperators` provides relevant operators
- **Value Population**: `allVariantValues` populates enum dropdowns
- **Input Selection**: `inputSequence` controls component rendering

### Event Delegation Pattern

- **Centralized Handling**: All events handled in ConditionRow
- **Standardized Interface**: Consistent event structure across components
- **Prop Drilling**: Event handlers passed down through component tree
- **State Synchronization**: All changes flow through single update function

### Component Composition

- **Modular Design**: Each component has single responsibility
- **Reusable Components**: Input components used across different contexts
- **Flexible Layout**: Components can be rearranged or replaced easily
- **Consistent Interface**: Standardized props and event handling

## Styling System

### TailwindCSS Classes

- **Layout**: `flex`, `items-center`, `gap-4`, `min-h-16`
- **Spacing**: `p-2`, `px-4`, `py-2`, `px-3`
- **Colors**: `bg-orange-100`, `text-orange-800`, `bg-red-500`
- **Interactive**: `hover:bg-red-600`, `rounded-lg`
- **Typography**: `font-semibold`

### Visual Hierarchy

- **AND Badges**: Orange background for visual connection
- **Remove Buttons**: Red color for destructive actions
- **Input Consistency**: Uniform styling across input types
- **Spacing**: Consistent gaps and padding throughout

## Performance Considerations

### Efficient Rendering

- **Component Memoization**: Components could be memoized for performance
- **Event Handler Stability**: Event handlers could be memoized
- **Conditional Rendering**: Only necessary components are rendered
- **Key-based Updates**: React keys ensure efficient list updates

### Memory Management

- **Event Handler Cleanup**: Proper cleanup of event handlers
- **Component Lifecycle**: Efficient mounting and unmounting
- **Data Processing**: Minimal data transformation in render

## Error Handling

### Graceful Degradation

- **Missing Data**: Components handle missing props gracefully
- **Invalid Input**: Input validation and sanitization
- **Event Errors**: Safe event handling with error boundaries
- **Fallback Rendering**: Default components when type unknown

### Validation

- **Input Validation**: Type-appropriate validation for each input
- **Required Fields**: Handling of required vs optional fields
- **Data Consistency**: Ensuring data integrity across updates

## Testing Strategy

### Unit Testing

- **Component Rendering**: Test each component renders correctly
- **Event Handling**: Test event propagation and handling
- **Props Validation**: Test component behavior with different props
- **Edge Cases**: Test with missing or invalid data

### Integration Testing

- **Component Interaction**: Test component communication
- **Data Flow**: Test data flow through component hierarchy
- **State Updates**: Test state synchronization
- **User Workflows**: Test complete user interaction flows

## Future Enhancement Areas

### User Experience

- **Auto-complete**: Smart suggestions for input values
- **Validation Feedback**: Real-time validation with visual feedback
- **Keyboard Navigation**: Full keyboard support for all inputs
- **Accessibility**: Enhanced ARIA labels and screen reader support

### Functionality

- **Custom Operators**: User-defined comparison operators
- **Input Templates**: Predefined input configurations
- **Bulk Editing**: Multi-select and bulk operations
- **Input History**: Recently used values and suggestions

### Performance

- **Virtual Scrolling**: For large lists of conditions
- **Lazy Loading**: Load input options on demand
- **Memoization**: Optimize re-rendering with React.memo
- **Bundle Splitting**: Code splitting for input components

## Component Dependencies

- **React**: Core React functionality
- **Constants**: Payment domain constants
- **TailwindCSS**: Styling framework
- **Parent Components**: Integration with Condition and ConditionRow
