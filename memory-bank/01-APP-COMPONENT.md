# App Component Context

## File: `src/App.jsx`

## Purpose

Main application component that serves as the root container for the rule builder interface. Orchestrates the overall layout and provides the primary user interface for rule management.

## Key Responsibilities

1. **Layout Management**: Provides the main application structure and styling
2. **Group Orchestration**: Renders and manages multiple rule groups
3. **Global Actions**: Handles rule-level operations (save, auth type)
4. **Visual Hierarchy**: Displays group operators and relationships

## Dependencies

- `./components/Group`: Group component for rendering individual rule groups
- `./context/RuleBuilderContext`: Context hook for state management
- `./App.css`: Component-specific styles

## State Integration

Uses `useRuleBuilderContext` to access:

- `ruleState`: Complete rule configuration
- `addGroup()`: Function to add new groups
- `removeGroup(groupId)`: Function to remove groups
- `updateAuthType(authType)`: Function to update authentication type
- `saveRule()`: Function to save and log the complete rule

## Component Structure

### Header Section

- Blue header bar with "Rule Builder" title
- Centered layout with padding

### Groups Section

- Maps through `ruleState.groups` to render Group components
- Displays group operators (OR) between groups
- Shows visual separation with styled operator badges

### Add Group Button

- Dashed border button for adding new groups
- Always shows "OR" relationship context
- Full-width layout for easy access

### Auth Type Section

- Gray background section for authentication settings
- Dropdown select for auth type (any/all/none)
- Clear labeling: "Auth Type is equal to"

### Save Section

- Blue save button with hover effects
- Triggers `saveRule()` function
- Logs complete rule state to console

## UI/UX Features

- **Responsive Design**: Flexbox layout adapts to screen sizes
- **Visual Hierarchy**: Clear separation between sections
- **Interactive Elements**: Hover states and visual feedback
- **Accessibility**: Semantic HTML structure

## Styling Classes (TailwindCSS)

- Layout: `flex`, `h-screen`, `w-full`, `flex-col`
- Spacing: `p-4`, `py-5`, `mt-5`
- Colors: `bg-blue-100`, `bg-orange-100`, `bg-gray-100`
- Borders: `border-dashed`, `border-orange-800`
- Typography: `text-lg`, `font-semibold`

## Data Flow

1. **Initialization**: Receives state from RuleBuilderContext
2. **Group Management**: Passes group data to Group components
3. **User Actions**: Handles button clicks and form changes
4. **State Updates**: Triggers context methods for state changes
5. **Visual Updates**: Re-renders based on state changes

## Integration Points

- **Group Component**: Passes `groupId`, `groupNumber`, `onRemove`, `showRemoveButton`
- **Context Methods**: Direct integration with state management functions
- **Event Handling**: onClick and onChange handlers for user interactions

## Business Logic

- **Group Relationships**: Visual representation of OR logic between groups
- **Minimum Groups**: Ensures at least one group exists (handled by Group component)
- **Auth Type**: Final rule evaluation criteria
- **Rule Persistence**: Save functionality with console logging

## Error Handling

- Relies on context error boundaries
- Group removal validation handled in state management
- No direct error handling in this component

## Performance Considerations

- **Efficient Rendering**: Uses React keys for group mapping
- **State Optimization**: Minimal re-renders through context design
- **Event Delegation**: Proper event handler binding

## Future Enhancement Areas

- Rule name/description input fields
- Rule validation feedback
- Export/import functionality
- Rule templates
- Undo/redo capabilities
