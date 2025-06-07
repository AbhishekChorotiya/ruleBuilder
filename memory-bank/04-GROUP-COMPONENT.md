# Group Component Context

## File: `src/features/rule-builder/components/Group.jsx`

## Purpose

Container component that represents a logical group of conditions in the rule builder. Groups are joined by OR operators and contain conditions that are evaluated together using AND/OR logic.

## Component Responsibilities

1. **Visual Container**: Provides bordered container for condition grouping
2. **Group Management**: Handles group removal functionality
3. **Header Display**: Shows group number and remove button
4. **Condition Delegation**: Renders Condition component for group logic

## Props Interface

```javascript
{
  groupId: number,           // Unique identifier for the group
  groupIndex: number,        // Array index for the group
  groupNumber: number,       // Display number (1-based index)
  onRemove: function,        // Callback function for group removal
  showRemoveButton: boolean, // Whether to show the remove button
  form: object,             // React Final Form instance
  values: object            // Current form values
}
```

## Component Structure

### Header Section

- **Gray Background**: `bg-gray-200` provides visual separation
- **Group Label**: "Group - {groupNumber}" for clear identification
- **Remove Button**: Red "×" button when `showRemoveButton` is true
- **Flexbox Layout**: Space-between layout for label and button alignment

### Content Section

- **White Background**: Clean content area with padding
- **Condition Container**: Renders `<Condition groupId={groupId} />`
- **Padding**: `p-5` provides comfortable spacing around conditions

## Styling Details

### Container Styling

- **Border**: `border border-gray-300` for subtle group separation
- **Border Radius**: `rounded-lg` for modern appearance
- **Layout**: `h-fit w-full` for responsive sizing

### Header Styling

- **Background**: `bg-gray-200` distinguishes header from content
- **Padding**: `p-2 px-4` for balanced spacing
- **Typography**: Default text styling for group label

### Remove Button Styling

- **Colors**: `bg-red-500 text-white` with `hover:bg-red-600`
- **Size**: `px-2 py-1 text-sm` for compact button
- **Shape**: `rounded` for consistent styling
- **Accessibility**: `title="Remove Group"` for tooltip

## Event Handling

### Remove Functionality

```javascript
const handleRemove = () => {
  onRemove(groupId);
};
```

**Flow**:

1. User clicks remove button
2. `handleRemove` is triggered
3. Calls `onRemove(groupId)` prop function
4. Parent component handles actual removal logic

## Integration Points

### Parent Component (App.jsx)

- **Receives Props**: groupId, groupNumber, onRemove, showRemoveButton
- **Group Mapping**: Rendered in map function over `ruleState.groups`
- **Remove Logic**: `onRemove` connects to `removeGroup` from context

### Child Component (Condition.jsx)

- **Multiple Props**: Passes `groupId`, `groupIndex`, `form`, `values` to Condition component
- **Form Integration**: Passes React Final Form instance and values
- **Delegation**: All condition logic handled by child component
- **Isolation**: Group doesn't manage condition-specific logic

## State Management Integration

- **No Direct State**: Component is purely presentational
- **Props-driven**: All data comes from parent via props
- **Form Integration**: Passes React Final Form instance to child components
- **Event Delegation**: Removal logic handled by parent's form methods

## Business Logic

### Group Removal Rules

- **Minimum Groups**: Remove button only shown when multiple groups exist
- **Validation**: Actual removal validation handled in state management
- **UI Feedback**: Button visibility provides immediate feedback

### Visual Hierarchy

- **Group Separation**: Clear visual boundaries between groups
- **Content Organization**: Header/content structure for scanability
- **Action Accessibility**: Remove button prominently placed but not intrusive

## Accessibility Features

- **Semantic Structure**: Proper div hierarchy for screen readers
- **Button Labels**: Title attribute on remove button
- **Color Contrast**: Red button provides sufficient contrast
- **Focus Management**: Standard button focus behavior

## Performance Considerations

- **Lightweight**: Minimal logic and rendering overhead
- **Efficient Re-renders**: Only re-renders when props change
- **Event Handler Optimization**: Simple event handler with minimal processing

## Error Handling

- **Graceful Degradation**: Works even if remove button fails
- **Prop Validation**: Relies on parent for valid props
- **Safe Operations**: No direct state mutations

## Testing Considerations

- **Props Testing**: Verify correct prop passing to Condition
- **Event Testing**: Test remove button click handling
- **Conditional Rendering**: Test remove button visibility logic
- **Integration Testing**: Verify group removal flow

## Future Enhancement Areas

### Visual Improvements

- **Drag and Drop**: Reorder groups functionality
- **Collapse/Expand**: Minimize groups for better overview
- **Group Operators**: Visual AND/OR toggle within groups
- **Group Naming**: Custom group labels

### Functionality Enhancements

- **Group Duplication**: Clone group with all conditions
- **Group Templates**: Predefined group configurations
- **Group Validation**: Visual validation feedback
- **Group Statistics**: Show condition count and complexity

### Accessibility Improvements

- **Keyboard Navigation**: Full keyboard support for group operations
- **Screen Reader**: Enhanced ARIA labels and descriptions
- **High Contrast**: Better support for accessibility themes
- **Focus Management**: Improved focus handling on removal

## Component Dependencies

- **React**: Core React functionality
- **Condition Component**: Child component for condition management
- **TailwindCSS**: Styling framework for visual design

## Integration Patterns

- **Container Pattern**: Acts as container for condition logic
- **Event Delegation**: Delegates events to parent components
- **Prop Drilling**: Receives data through props from parent
- **Composition**: Composes with Condition component for full functionality
