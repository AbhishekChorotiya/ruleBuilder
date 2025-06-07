# RuleBuilderApp Component Context

## File: `src/features/rule-builder/components/RuleBuilderApp.jsx`

## Purpose

Main rule builder application component that serves as the root container for the rule builder interface. Orchestrates the overall layout and provides the primary user interface for rule management within the rule-builder feature.

## Key Responsibilities

1. **Layout Management**: Provides the main application structure and styling
2. **Group Orchestration**: Renders and manages multiple rule groups
3. **Global Actions**: Handles rule-level operations (save, auth type)
4. **Visual Hierarchy**: Displays group operators and relationships
5. **Icon Integration**: Uses React Icons for modern UI elements

## Dependencies

- `react-icons/io5`: IoAdd icon for add buttons
- `./Group`: Group component for rendering individual rule groups
- `../context/RuleBuilderContext`: Context hook for state management
- `../styles/RuleBuilder.css`: Feature-specific styles

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
- Semantic HTML with proper heading structure
- Centered layout with consistent padding

### Groups Section

- Maps through `ruleState.groups` to render Group components
- Displays group operators (OR) between groups
- Shows visual separation with styled operator badges
- Proper React keys for efficient rendering

### Add Group Button

- Dashed border button with React Icons (IoAdd)
- Always shows "OR" relationship context
- Full-width layout for easy access
- Hover states and accessibility features

### Auth Type Section

- Gray background section for authentication settings
- Proper form labels and semantic HTML
- Dropdown select for auth type (any/all/none)
- Clear labeling: "Auth Type is equal to"

### Save Section

- Blue save button with hover effects
- Triggers `saveRule()` function
- Logs complete rule state to console
- Focus states for accessibility

## UI/UX Features

- **Modern Icons**: React Icons integration for consistent iconography
- **Responsive Design**: CSS Grid and Flexbox for adaptive layouts
- **Visual Hierarchy**: Clear separation between sections with proper spacing
- **Interactive Elements**: Hover states, focus states, and visual feedback
- **Accessibility**: Semantic HTML, proper labels, and keyboard navigation
- **Custom CSS**: Feature-specific styling with BEM methodology

## Styling Architecture

Uses custom CSS with BEM (Block Element Modifier) methodology:

- **Block**: `.rule-builder` - Main component container
- **Elements**: `.rule-builder__header`, `.rule-builder__content`, etc.
- **Modifiers**: Hover states, focus states, and interactive variations

### Key CSS Classes

- `.rule-builder`: Main container with flexbox layout
- `.rule-builder__header`: Header section with blue background
- `.rule-builder__groups`: Groups container with gap spacing
- `.rule-builder__add-group-btn`: Add group button with dashed border
- `.rule-builder__auth-section`: Authentication section styling
- `.rule-builder__save-btn`: Save button with blue theme

## Data Flow

1. **Initialization**: Receives state from RuleBuilderContext
2. **Group Management**: Passes group data to Group components
3. **User Actions**: Handles button clicks and form changes
4. **State Updates**: Triggers context methods for state changes
5. **Visual Updates**: Re-renders based on state changes

## Integration Points

### Child Components

- **Group Component**: Passes `groupId`, `groupNumber`, `onRemove`, `showRemoveButton`
- **Context Methods**: Direct integration with state management functions
- **Event Handling**: onClick and onChange handlers for user interactions

### Parent Integration

- **App.jsx**: Imported and rendered as the main feature component
- **Provider**: Wrapped by RuleBuilderProvider in main.jsx
- **Feature Module**: Exported through feature barrel (index.js)

## Business Logic

- **Group Relationships**: Visual representation of OR logic between groups
- **Minimum Groups**: Ensures at least one group exists (handled by Group component)
- **Auth Type**: Final rule evaluation criteria
- **Rule Persistence**: Save functionality with console logging

## Accessibility Features

- **Semantic HTML**: Proper use of header, main, section elements
- **Form Labels**: Proper labeling for form controls
- **Button Types**: Explicit button type attributes
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Meaningful text and structure

## Performance Considerations

- **Efficient Rendering**: Uses React keys for group mapping
- **State Optimization**: Minimal re-renders through context design
- **Event Delegation**: Proper event handler binding
- **CSS Optimization**: Custom CSS instead of runtime utility classes

## Error Handling

- Relies on context error boundaries
- Group removal validation handled in state management
- Graceful degradation for missing data

## Future Enhancement Areas

### Functionality

- Rule name/description input fields
- Rule validation feedback
- Export/import functionality
- Rule templates
- Undo/redo capabilities

### UI/UX

- Dark mode support
- Keyboard shortcuts
- Drag and drop for reordering
- Animation and transitions
- Mobile-first responsive design

### Performance

- Virtual scrolling for large rule sets
- Memoization of expensive operations
- Code splitting for feature modules
- Progressive loading

## Testing Considerations

- **Unit Tests**: Component rendering and prop handling
- **Integration Tests**: Context integration and state updates
- **Accessibility Tests**: Screen reader compatibility and keyboard navigation
- **Visual Tests**: Snapshot testing for UI consistency
- **User Flow Tests**: Complete rule building workflows

## Development Patterns

- **Feature-based Architecture**: Self-contained within rule-builder feature
- **Component Composition**: Modular design with clear responsibilities
- **Custom CSS**: Maintainable styling with BEM methodology
- **React Icons**: Consistent iconography throughout the application
- **Semantic HTML**: Proper document structure and accessibility
