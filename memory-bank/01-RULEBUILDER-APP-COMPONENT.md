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

- `react-final-form`: Form component for form state management
- `react-icons/io5`: IoAdd icon for add buttons
- `./Group`: Group component for rendering individual rule groups
- `../../../utils/constants`: allKeys constant for default values

## State Integration

Uses React Final Form's render prop pattern with:

- `form`: Form instance for programmatic form manipulation
- `values`: Current form state values
- `handleSubmit`: Form submission handler
- `form.change()`: Method to update form values programmatically

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
- **Responsive Design**: Tailwind utilities for adaptive layouts
- **Visual Hierarchy**: Clear separation between sections with proper spacing
- **Interactive Elements**: Hover states, focus states, and visual feedback
- **Accessibility**: Semantic HTML, proper labels, and keyboard navigation
- **Utility-First Styling**: TailwindCSS for maintainable and consistent styling

## Styling Architecture

Uses TailwindCSS utility classes for styling:

- **Layout**: Flexbox and grid utilities for responsive design
- **Colors**: Consistent color palette using Tailwind color classes
- **Spacing**: Standardized padding and margin using Tailwind spacing scale
- **Interactive States**: Hover, focus, and transition utilities

### Key Tailwind Classes

- **Container**: `flex h-screen w-full flex-col` - Main layout structure
- **Header**: `flex justify-center bg-blue-100 p-4` - Header styling
- **Groups**: `flex flex-col gap-4` - Groups container layout
- **Buttons**: `rounded-lg bg-blue-500 hover:bg-blue-600` - Interactive elements
- **Form Elements**: `rounded border border-gray-300 focus:border-blue-500` - Input styling
- **Badges**: `rounded-lg bg-orange-200 text-orange-800` - Status indicators

## Data Flow

1. **Initialization**: Form initialized with `initialValues` structure
2. **Group Management**: Passes form instance and values to Group components
3. **User Actions**: Handles button clicks and form changes via `form.change()`
4. **State Updates**: Form state updates trigger automatic re-renders
5. **Visual Updates**: Components re-render based on form values changes

## Integration Points

### Child Components

- **Group Component**: Passes `groupId`, `groupIndex`, `groupNumber`, `onRemove`, `showRemoveButton`, `form`, `values`
- **Form Methods**: Direct integration with React Final Form methods
- **Event Handling**: onClick handlers that use `form.change()` for state updates

### Parent Integration

- **App.jsx**: Imported and rendered as the main feature component
- **No Provider**: React Final Form manages state internally, no external provider needed
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
- **Styling Optimization**: TailwindCSS utility classes for optimal performance

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
- **Utility-First CSS**: TailwindCSS for maintainable and consistent styling
- **React Icons**: Consistent iconography throughout the application
- **Semantic HTML**: Proper document structure and accessibility
