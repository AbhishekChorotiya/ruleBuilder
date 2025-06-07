# Rule Builder Memory Bank

## Overview

This memory bank contains comprehensive context files for AI systems to understand, modify, and extend the Rule Builder project. Each file provides detailed information about specific aspects of the codebase.

## File Structure and Purpose

### 📋 [00-PROJECT-OVERVIEW.md](./00-PROJECT-OVERVIEW.md)

**High-level project understanding**

- Project summary and technology stack
- Core architecture concepts
- Key features and domain knowledge
- Development patterns and file structure
- **Use when**: Getting initial project understanding or explaining the project to others

### 🏠 [01-APP-COMPONENT.md](./01-APP-COMPONENT.md)

**Main application component context**

- App.jsx component responsibilities
- Layout management and UI structure
- Integration with state management
- Event handling and user interactions
- **Use when**: Modifying the main application layout or adding global features

### 🔄 [02-STATE-MANAGEMENT.md](./02-STATE-MANAGEMENT.md)

**Centralized state system architecture**

- useRuleBuilderState hook details
- React Context implementation
- State structure and management functions
- Data flow patterns and performance considerations
- **Use when**: Working with state updates, adding new state fields, or debugging state issues

### ⚙️ [03-CONSTANTS-CONFIG.md](./03-CONSTANTS-CONFIG.md)

**Domain knowledge and configuration**

- Payment-related constants and data types
- Operator definitions and validation rules
- Integration with UI components
- Maintenance and extension guidelines
- **Use when**: Adding new payment methods, operators, or modifying business logic

### 📦 [04-GROUP-COMPONENT.md](./04-GROUP-COMPONENT.md)

**Group container component**

- Group.jsx component structure
- Visual hierarchy and styling
- Event handling and integration points
- Performance and accessibility considerations
- **Use when**: Modifying group layout, adding group-level features, or styling changes

### 🎯 [05-CONDITION-COMPONENT.md](./05-CONDITION-COMPONENT.md)

**Condition orchestration component**

- Condition.jsx management logic
- Data processing and transformation
- Event coordination and business logic
- Integration with child components
- **Use when**: Working with condition logic, data flow, or adding condition-level features

### 🧩 [06-CONDITION-SUBCOMPONENTS.md](./06-CONDITION-SUBCOMPONENTS.md)

**Detailed input components**

- ConditionRow and input component architecture
- Dynamic input rendering system
- Event delegation patterns
- Styling and performance considerations
- **Use when**: Modifying input components, adding new input types, or working with UI details

### 🤖 [07-AI-INTEGRATION-GUIDE.md](./07-AI-INTEGRATION-GUIDE.md)

**AI development guidelines**

- Mental models for AI understanding
- Development patterns and best practices
- Common tasks and approaches
- Pitfalls to avoid and quality standards
- **Use when**: Starting AI-assisted development or need guidance on project patterns

## Quick Reference

### For New AI Systems

1. Start with `00-PROJECT-OVERVIEW.md` for general understanding
2. Read `07-AI-INTEGRATION-GUIDE.md` for development guidelines
3. Focus on specific component files based on your task

### For Specific Tasks

#### Adding New Payment Methods

- Primary: `03-CONSTANTS-CONFIG.md`
- Secondary: `02-STATE-MANAGEMENT.md`, `06-CONDITION-SUBCOMPONENTS.md`

#### UI/Layout Changes

- Primary: `01-APP-COMPONENT.md`, `04-GROUP-COMPONENT.md`
- Secondary: `06-CONDITION-SUBCOMPONENTS.md`

#### State Management Changes

- Primary: `02-STATE-MANAGEMENT.md`
- Secondary: `05-CONDITION-COMPONENT.md`, `07-AI-INTEGRATION-GUIDE.md`

#### Component Development

- Primary: `06-CONDITION-SUBCOMPONENTS.md`
- Secondary: `05-CONDITION-COMPONENT.md`, `07-AI-INTEGRATION-GUIDE.md`

#### Bug Fixing

- Primary: `07-AI-INTEGRATION-GUIDE.md`
- Secondary: Relevant component files based on bug location

#### Performance Optimization

- Primary: `07-AI-INTEGRATION-GUIDE.md`
- Secondary: `02-STATE-MANAGEMENT.md`, `06-CONDITION-SUBCOMPONENTS.md`

## Key Concepts Summary

### Architecture Patterns

- **React Context + Custom Hooks**: Centralized state management
- **Component Composition**: Modular, reusable components
- **Type-Driven UI**: Input components determined by data types
- **Event Delegation**: Centralized event handling
- **Immutable State**: All state changes create new objects

### Data Flow

```
User Input → Component Event → Context Method → State Update → Re-render → UI Update
```

### Component Hierarchy

```
App → Group → Condition → ConditionRow → Input Components
```

### State Structure

```
Rule → Groups → Conditions → Fields (selectedKey, operator, values)
```

## Development Guidelines

### Before Making Changes

1. Read relevant context files
2. Understand data flow and dependencies
3. Consider impact on other components
4. Follow existing patterns and conventions

### Code Quality Standards

- Use functional components with hooks
- Implement immutable state updates
- Follow TailwindCSS styling patterns
- Maintain consistent prop interfaces
- Handle edge cases gracefully

### Testing Approach

- Unit test individual components
- Integration test data flow
- Test user workflows end-to-end
- Verify state synchronization

## Maintenance

### Keeping Memory Bank Updated

- Update context files when making significant changes
- Add new files for major new features
- Maintain consistency across documentation
- Review and optimize content regularly

### File Naming Convention

- `00-XX`: Ordered by importance/dependency
- Descriptive names indicating content focus
- `.md` extension for markdown formatting

This memory bank serves as a comprehensive knowledge base for AI systems working on the Rule Builder project. Use it as a reference for understanding, modifying, and extending the codebase while maintaining consistency and quality.
