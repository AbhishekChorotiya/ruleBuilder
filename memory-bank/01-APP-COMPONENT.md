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
- **Provider Setup**: No providers needed (React Final Form handles state internally)
- **Routing**: Currently single-feature app, but ready for routing addition

## Design Philosophy

- **Minimal Wrapper**: App.jsx contains no business logic
- **Feature Isolation**: All rule builder functionality is contained in the feature module
- **Scalability**: Easy to add new features alongside rule builder
- **Maintainability**: Clear separation of concerns

## Future Enhancement Areas

- **Routing**: Add React Router for multiple features
- **Global Layout**: Add common header/footer if needed
- **Error Boundaries**: Add global error handling
- **Theme Provider**: Add global theming if required
- **Authentication**: Add auth wrapper if needed

## Notes

This component intentionally contains minimal logic. All the complex UI elements (header, groups, conditions, etc.) are handled by the RuleBuilderApp component in the feature module. This maintains clean architecture and separation of concerns.
