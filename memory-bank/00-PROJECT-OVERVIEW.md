# Rule Builder Project - AI Context Overview

## Project Summary

A React-based rule builder application that allows users to create complex conditional rules for payment processing. The application uses a hierarchical structure with groups and conditions, supporting various payment-related criteria and logical operators.

## Technology Stack

- **Frontend**: React 19.1.0 with Vite 6.3.5
- **Styling**: TailwindCSS 4.1.8
- **State Management**: React Context + Custom Hooks
- **Development**: ESLint, Prettier
- **Build Tool**: Vite

## Project Architecture

### Core Concepts

1. **Rules**: Top-level configuration with metadata, groups, and auth settings
2. **Groups**: Collections of conditions joined by AND/OR operators
3. **Conditions**: Individual criteria (payment_method, amount, etc.) with operators and values
4. **Auth Type**: Final authentication requirement (any/all/none)

### State Structure

```json
{
  "name": "",
  "description": "",
  "groups": [
    {
      "id": 1,
      "operator": "AND",
      "conditions": [
        {
          "id": 1,
          "paymentCriteria": "payment_method",
          "criteriaValue": "",
          "comparisonOperator": "",
          "metadataKey": "",
          "metadataValue": ""
        }
      ]
    }
  ],
  "betweenGroupsOperator": "OR",
  "authenticationRequirement": "any",
  "isActive": true,
  "metadata": {
    "createdAt": "2025-06-07T01:21:20.664Z",
    "updatedAt": "2025-06-07T01:22:49.297Z",
    "version": "1.0.0"
  }
}
```

## Key Features

- **Dynamic Rule Building**: Add/remove groups and conditions
- **Payment-Specific**: Extensive payment method and criteria support
- **Flexible Operators**: Different operator types based on data types
- **Real-time Updates**: Automatic timestamp tracking
- **Validation**: Type-safe condition building
- **Modern UI**: React Icons with Tailwind CSS styling
- **Feature-based Architecture**: Organized by business features

## File Structure Overview

```
src/
├── App.jsx                           # Main application entry point
├── main.jsx                          # React entry point
├── features/
│   └── rule-builder/                 # Rule Builder feature module
│       ├── index.js                  # Feature barrel exports
│       ├── components/
│       │   ├── RuleBuilderApp.jsx    # Main rule builder component
│       │   ├── Group.jsx             # Group container component
│       │   ├── Condition.jsx         # Condition management component
│       │   └── condition/            # Specialized condition components
│       │       ├── index.js          # Condition components barrel
│       │       ├── ConditionRow.jsx  # Individual condition row
│       │       ├── ConditionLabel.jsx # WHERE/AND labels
│       │       ├── ConditionInputs.jsx # Input container
│       │       ├── InputRenderer.jsx  # Input factory
│       │       ├── InputWrapper.jsx   # Input wrapper
│       │       ├── TextInput.jsx      # Text input component
│       │       ├── SelectInput.jsx    # Select input component
│       │       └── SpecializedSelects.jsx # Specialized selects
│       ├── context/
│       │   └── RuleBuilderContext.jsx # React Context provider
│       └── hooks/
│           └── useRuleBuilderState.js # Centralized state management
└── utils/
    └── constants.js                   # Payment-related constants
```

## Data Flow

1. **State Management**: Centralized in `useRuleBuilderState` hook
2. **Context Distribution**: Shared via `RuleBuilderContext`
3. **Component Hierarchy**: App → Group → Condition → ConditionRow → Input Components
4. **Event Flow**: User interactions → Context methods → State updates → Re-render

## Payment Domain Knowledge

The application is specifically designed for payment processing rules with support for:

- Payment methods (card, wallet, bank transfer, etc.)
- Geographic restrictions (countries, regions)
- Authentication types (3DS, no-3DS)
- Device and platform detection
- Currency and amount-based rules
- Fraud prevention criteria

## Development Patterns

- **Immutable State Updates**: All state changes create new objects
- **Prop Drilling Avoidance**: Context-based state sharing
- **Component Composition**: Modular, reusable components
- **Type Safety**: Consistent data structures throughout
- **Separation of Concerns**: Clear boundaries between UI and logic
