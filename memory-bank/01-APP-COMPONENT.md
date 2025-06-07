# App Component Context

## File: `src/App.jsx`

## Purpose

Main application entry point that serves as a thin wrapper around the Rule Builder feature. Follows the feature-based architecture pattern by delegating all functionality to the RuleBuilderApp component.

## Key Responsibilities

1. **Feature Delegation**: Renders the RuleBuilderApp component from the rule-builder feature
2. **Clean Architecture**: Maintains separation between app shell and feature logic
3. **Single Responsibility**: Acts as the application entry point only

## Dependencies

- `./features/rule-builder`: Rule Builder feature module

## Architecture Pattern

The App component follows the **Feature Shell Pattern**:

- Minimal logic in the main App component
- All business logic contained within feature modules
- Clean separation of concerns
- Easy feature addition/removal

## Code Structure

```jsx
import { RuleBuilderApp } from "./features/rule-builder";

function App() {
  return <RuleBuilderApp />;
}

export default App;
```

## Integration Points

- **Feature Module**: Imports and renders RuleBuilderApp
- **Provider Setup**: Context providers are set up in main.jsx
- **Routing**: Currently single-feature app, but ready for routing addition

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
