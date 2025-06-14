# Condition Sub-Components Context

## Directory: `src/features/rule-builder/components/condition/`

## Purpose

Collection of specialized components that handle the detailed UI and logic for individual condition rows. These components work together to create a flexible, type-aware condition building interface.

## Component Architecture

### ConditionRow.jsx - Main Row Component

**Purpose**: Orchestrates the layout and logic for a single condition row.

**Key Responsibilities**:

1. **Layout Management**: Arranges label, inputs, and remove button
2. **Props Delegation**: Passes props to child components for React Final Form integration
3. **Conditional Rendering**: Shows AND label or condition label based on position
4. **Component Composition**: Composes ConditionLabel, ConditionInputs, and remove button

**Props Interface**:

```javascript
{
  condition: object,              // Complete condition data
  removeCondition: function,      // Remove callback
  showRemoveButton: boolean,      // Remove button visibility
  isFirst: boolean,              // First condition in group flag
  operators: array,              // Available operators for this condition
  valuesForSelectedKey: array,   // Enum values for selected key
  inputSequenceValue: array,     // UI flow sequence
  selectedKeyType: string,       // Type of the selected key
  groupIndex: number,            // Group array index
  conditionIndex: number         // Condition array index
}
```

**Component Structure**:

- **ConditionLabel**: Displays IF/AND labels based on position
- **ConditionInputs**: Container for all input components
- **Remove Button**: Conditional remove button with proper event handling

**Layout Structure**:

- **Label Section**: ConditionLabel component with dynamic labelType prop
- **Input Section**: ConditionInputs component with all input logic
- **Action Section**: Remove button (when multiple conditions exist)

### InputRenderer.jsx - Dynamic Input Factory

**Purpose**: Factory component that renders the appropriate input component based on input type with React Final Form Field integration.

**Key Features**:

- **Field Name Generation**: Creates proper field names using array indices for React Final Form
- **Component Mapping**: Maps input types to appropriate React Final Form Field components
- **Type-aware Rendering**: Selects correct input component based on selectedKeyType

**Props Interface**:

```javascript
{
  inputType: string,              // Type of input to render
  allKeys: array,                // Available payment keys
  operators: array,              // Available operators
  valuesForSelectedKey: array,   // Enum values for dropdowns
  groupIndex: number,            // Group array index
  conditionIndex: number,        // Condition array index
  selectedKeyType: string        // Type of the selected key
}
```

**Field Name Generation**:

```javascript
const getFieldName = (field) => {
  return `groups[${groupIndex}].conditions[${conditionIndex}].${field}`;
};
```

**Component Mapping**:

```javascript
const inputComponents = {
  "key-item": (
    <SelectKeyItem
      allKeys={allKeys}
      fieldName={getFieldName("paymentCriteria")}
    />
  ),
  operator: (
    <SelectOperator
      operators={operators}
      fieldName={getFieldName("comparisonOperator")}
    />
  ),
  "select-value": (
    <SelectValue
      valuesForSelectedKey={valuesForSelectedKey}
      fieldName={getFieldName("criteriaValue")}
    />
  ),
  "value-input": (
    <TextInput
      fieldName={
        selectedKeyType === "metadata_value"
          ? getFieldName("metadataValue")
          : getFieldName("criteriaValue")
      }
    />
  ),
  "key-input": <TextInput fieldName={getFieldName("metadataKey")} />,
};
```

**Design Pattern**: Factory pattern with React Final Form Field integration for dynamic component selection.

### ConditionInputs.jsx - Input Container

**Purpose**: Container component that manages the sequence of inputs for a condition.

**Key Features**:

- **Dynamic Rendering**: Renders inputs based on `inputSequenceValue`
- **Input Wrapping**: Wraps each input in `InputWrapper` for consistent styling
- **Sequence Management**: Controls the order and visibility of input components

### ConditionLabel.jsx - Dynamic Condition Label

**Purpose**: Displays dynamic labels for conditions based on labelType prop. Supports both "IF" and "AND" labels with appropriate styling.

**Props Interface**:

```javascript
{
  labelType: string; // Label type to display ("IF" or "AND"), defaults to "IF"
}
```

**Key Features**:

- **Dynamic Styling**: Uses `getStyleClasses` function to apply appropriate colors based on labelType
- **Flexible Text**: Displays the labelType value dynamically
- **Consistent Design**: Maintains uniform styling patterns across all label types
- **Extensible**: Easy to add new label types by extending the styling function

**Styling Logic**:

- **"IF" Labels**: Green background (`bg-green-100 text-green-800`)
- **"AND" Labels**: Orange background (`bg-orange-200 text-orange-800`)
- **Default Fallback**: Green styling for unknown types

**Usage in ConditionRow**:

```javascript
<ConditionLabel labelType={isFirst ? "IF" : "AND"} />
```

### Input Components

#### SpecializedSelects.jsx - Dropdown Components

Contains three specialized select components using React Final Form Field:

**SelectKeyItem**:

- **Purpose**: Dropdown for selecting payment criteria keys using React Final Form Field
- **Data Source**: `allKeys` array from constants
- **Props**: `allKeys` array and `fieldName` for Field integration
- **Implementation**: Uses `<Field name={fieldName}>` with render prop pattern
- **Styling**: Consistent select styling with payment-specific options

**SelectOperator**:

- **Purpose**: Dropdown for selecting comparison operators using React Final Form Field
- **Data Source**: `operators` array (filtered by key type)
- **Props**: `operators` array and `fieldName` for Field integration
- **Implementation**: Uses `<Field name={fieldName}>` with render prop pattern
- **Dynamic Options**: Changes based on selected key's data type

**SelectValue**:

- **Purpose**: Dropdown for selecting enum values using React Final Form Field
- **Data Source**: `valuesForSelectedKey` array
- **Props**: `valuesForSelectedKey` array and `fieldName` for Field integration
- **Implementation**: Uses `<Field name={fieldName}>` with render prop pattern
- **Conditional Rendering**: Only shown for enum_variant types

**Common Field Pattern**:

```javascript
<Field name={fieldName}>
  {({ input }) => (
    <select
      {...input}
      className="rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    >
      {/* Options rendered here */}
    </select>
  )}
</Field>
```

#### TextInput.jsx - Text Input Component

**Purpose**: Reusable text input for free-form values using React Final Form Field.

**Props Interface**:

```javascript
{
  fieldName: string,           // Field name for React Final Form
  placeholder: string          // Placeholder text (optional)
}
```

**Implementation**:

```javascript
<Field name={fieldName}>
  {({ input }) => (
    <input
      {...input}
      type="text"
      placeholder={placeholder}
      className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
  )}
</Field>
```

**Features**:

- **React Final Form Integration**: Uses Field component with render prop pattern
- **Automatic State Management**: Form state handled by React Final Form
- **Placeholder Support**: Dynamic placeholder text
- **Consistent Styling**: Uniform input styling across the application
- **Focus States**: Proper focus and validation styling

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

1. **User Input** → React Final Form Field component onChange
2. **Automatic State Update** → React Final Form automatically updates form state
3. **Field Path** → Updates specific field using array notation (e.g., `groups[0].conditions[0].paymentCriteria`)
4. **Form Re-render** → Form components re-render with new values
5. **UI Update** → Visual changes reflect new form state

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
- **Colors**: `bg-orange-200`, `text-orange-800`, `bg-red-500`
- **Interactive**: `hover:bg-red-600`, `rounded-lg`
- **Typography**: `font-semibold`
- **Form Elements**: `rounded border border-gray-300 focus:border-blue-500`
- **Input Containers**: `bg-gray-100`, `bg-white`, `shadow-sm`

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
