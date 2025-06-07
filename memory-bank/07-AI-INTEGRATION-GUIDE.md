# AI Integration Guide

## Purpose

This guide provides AI systems with comprehensive context for understanding, modifying, and extending the Rule Builder project. It serves as a roadmap for AI-assisted development and maintenance.

## Project Understanding Framework

### Core Concepts for AI

1. **Rule Builder Domain**: Payment processing rule configuration system
2. **Hierarchical Structure**: Rules → Groups → Conditions → Inputs
3. **Type-Driven UI**: Input components determined by data types
4. **Immutable State**: All state changes create new objects
5. **Event-Driven Architecture**: User actions flow through context to state

### Key Mental Models

#### Data Flow Mental Model

```
User Input → Component Event → Context Method → State Update → Re-render → UI Update
```

#### Component Hierarchy Mental Model

```
App
├── Group (multiple)
│   └── Condition
│       └── ConditionRow (multiple)
│           ├── ConditionLabel/AND Badge
│           ├── ConditionInputs
│           │   └── InputRenderer (multiple)
│           │       ├── SelectKeyItem
│           │       ├── SelectOperator
│           │       ├── SelectValue
│           │       └── TextInput
│           └── Remove Button
└── Auth Type Section
```

#### State Structure Mental Model

```
Rule State
├── Metadata (name, description, timestamps)
├── Groups Array
│   ├── Group ID & Operator
│   └── Conditions Array
│       └── Condition Fields (selectedKey, operator, values)
├── Group Operator (OR between groups)
└── Auth Type
```

## AI Development Guidelines

### When Modifying Components

#### Before Making Changes

1. **Read Context Files**: Review relevant memory bank files
2. **Understand Data Flow**: Trace how data flows through components
3. **Check Dependencies**: Identify which components depend on changes
4. **Consider State Impact**: Understand how changes affect state structure

#### Component Modification Patterns

1. **UI Changes**: Focus on styling and layout without breaking data flow
2. **Logic Changes**: Ensure event handling and state updates remain consistent
3. **New Features**: Follow existing patterns for consistency
4. **Performance**: Consider memoization and rendering optimization

### When Adding New Features

#### Payment Method Addition

1. Add to `allKeys` array in constants
2. Define type in `allKeyTypes`
3. Add operators if new type needed
4. Add enum values if applicable
5. Test with existing UI components

#### New Input Type Addition

1. Define in `inputSequence` constant
2. Create component in InputRenderer
3. Add event handling in ConditionRow
4. Update state management if needed
5. Add styling consistency

#### New Component Addition

1. Follow existing component patterns
2. Use consistent prop interfaces
3. Implement proper event delegation
4. Add to appropriate context file
5. Maintain styling consistency

### Common AI Tasks and Approaches

#### Bug Fixing

1. **Identify Scope**: Determine if bug is in UI, logic, or state
2. **Trace Data Flow**: Follow data from source to display
3. **Check Event Handling**: Verify events reach correct handlers
4. **Validate State**: Ensure state updates are immutable
5. **Test Integration**: Verify fix doesn't break other components

#### Feature Enhancement

1. **Understand Requirements**: Clarify what needs to be added/changed
2. **Design Integration**: Plan how feature fits existing architecture
3. **Identify Touch Points**: List all components that need changes
4. **Maintain Consistency**: Follow existing patterns and conventions
5. **Update Documentation**: Add to relevant context files

#### Performance Optimization

1. **Identify Bottlenecks**: Find components with unnecessary re-renders
2. **Add Memoization**: Use React.memo for expensive components
3. **Optimize Event Handlers**: Stabilize event handler references
4. **Reduce Bundle Size**: Consider code splitting for large features
5. **Monitor Impact**: Verify optimizations don't break functionality

### Code Quality Standards

#### React Best Practices

- Use functional components with hooks
- Implement proper key props for lists
- Handle edge cases gracefully
- Follow immutable state patterns
- Use consistent prop interfaces

#### State Management Patterns

- All state changes through context methods
- Immutable updates only
- Automatic timestamp updates
- Validation at state level
- Consistent error handling

#### Styling Guidelines

- Use TailwindCSS classes consistently
- Maintain visual hierarchy
- Ensure responsive design
- Follow accessibility standards
- Keep consistent spacing and colors

### Testing Considerations for AI

#### Unit Testing Focus

- Component rendering with various props
- Event handling and propagation
- State update logic
- Edge cases and error conditions
- Integration between components

#### Integration Testing Focus

- Complete user workflows
- Data flow through component hierarchy
- State synchronization
- Context provider functionality
- Cross-component communication

### Common Pitfalls to Avoid

#### State Management

- **Direct State Mutation**: Always use context methods
- **Missing Timestamps**: Ensure updatedAt is set
- **Inconsistent IDs**: Use proper ID generation
- **Validation Bypass**: Don't skip validation logic

#### Component Development

- **Prop Drilling**: Use context for deep data passing
- **Event Handler Instability**: Memoize when necessary
- **Missing Keys**: Always provide React keys for lists
- **Styling Inconsistency**: Follow existing patterns

#### Data Handling

- **Type Mismatches**: Respect data type definitions
- **Missing Fallbacks**: Handle undefined/null values
- **Constant Modifications**: Update all related mappings
- **Event Name Mismatches**: Use correct event names

### AI-Specific Recommendations

#### Code Analysis

- Always read existing code before making changes
- Understand the full context of modifications
- Consider ripple effects of changes
- Verify assumptions with code inspection

#### Pattern Recognition

- Identify and follow existing patterns
- Maintain consistency across similar components
- Use established conventions for new code
- Respect architectural decisions

#### Error Prevention

- Validate changes against existing tests
- Consider edge cases and error conditions
- Ensure backward compatibility
- Test integration points thoroughly

### File Organization Understanding

#### Memory Bank Structure

- `00-PROJECT-OVERVIEW.md`: High-level project understanding
- `01-APP-COMPONENT.md`: Main application component context
- `02-STATE-MANAGEMENT.md`: State system architecture
- `03-CONSTANTS-CONFIG.md`: Domain knowledge and configuration
- `04-GROUP-COMPONENT.md`: Group container component
- `05-CONDITION-COMPONENT.md`: Condition orchestration
- `06-CONDITION-SUBCOMPONENTS.md`: Detailed input components
- `07-AI-INTEGRATION-GUIDE.md`: This integration guide

#### Source Code Structure

- `src/App.jsx`: Main application entry point
- `src/context/`: React context and providers
- `src/hooks/`: Custom hooks for state management
- `src/components/`: All React components
- `src/components/condition/`: Specialized condition components
- `src/utils/`: Constants and utility functions

### Maintenance Guidelines

#### Regular Updates

- Keep context files synchronized with code changes
- Update documentation when adding features
- Maintain consistency in patterns and conventions
- Review and optimize performance regularly

#### Long-term Considerations

- Plan for scalability in component design
- Consider internationalization needs
- Design for accessibility from the start
- Maintain clean separation of concerns

This guide should be used as a reference for all AI-assisted development on the Rule Builder project. It provides the necessary context and guidelines to ensure consistent, high-quality modifications and enhancements.
