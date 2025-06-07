# Rule Builder

A React-based rule builder application for creating complex conditional rules for payment processing. Build sophisticated payment rules with hierarchical groups, conditions, and logical operators through an intuitive drag-and-drop interface.

## 🚀 Features

- **Dynamic Rule Building**: Create complex rules with nested groups and conditions
- **Payment-Specific**: Extensive support for payment methods, currencies, and fraud prevention
- **Flexible Operators**: Context-aware operators based on data types
- **Real-time Updates**: Automatic timestamp tracking and validation
- **Modern UI**: Clean interface built with TailwindCSS and React Icons
- **Type Safety**: Consistent data structures throughout the application

## 🛠️ Technology Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: TailwindCSS 4.1.8
- **Icons**: React Icons 5.5.0
- **State Management**: React Context + Custom Hooks
- **Code Quality**: ESLint + Prettier

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rulebuilder
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### Basic Rule Structure

Rules are composed of:

- **Groups**: Collections of conditions joined by AND/OR operators
- **Conditions**: Individual criteria (payment_method, amount, country, etc.)
- **Operators**: Logical operators (equals, contains, greater than, etc.)
- **Auth Type**: Final authentication requirement (any/all/none)

### Creating Rules

1. **Add Groups**: Click "Add Group" to create condition containers
2. **Add Conditions**: Within each group, add specific payment criteria
3. **Set Operators**: Choose how conditions relate (AND/OR)
4. **Configure Auth**: Set authentication requirements
5. **Save Rule**: Rules auto-save with metadata tracking

### Example Rule Structure

```json
{
  "name": "High-Value Card Payments",
  "description": "Require 3DS for card payments over $100",
  "groups": [
    {
      "id": 1,
      "operator": "AND",
      "conditions": [
        {
          "selectedKey": "payment_method",
          "selectedOperator": "equals",
          "selectedValue": "card"
        },
        {
          "selectedKey": "amount",
          "selectedOperator": "greater_than",
          "selectedValue": "100"
        }
      ]
    }
  ],
  "groupOperator": "OR",
  "authType": "3ds",
  "isActive": true
}
```

## 🏗️ Architecture

### Component Hierarchy

```
RuleBuilderApp
├── Group (multiple)
│   ├── Condition (multiple)
│   │   ├── ConditionRow
│   │   │   ├── ConditionLabel
│   │   │   ├── ConditionInputs
│   │   │   │   ├── InputRenderer
│   │   │   │   │   ├── SelectInput
│   │   │   │   │   ├── TextInput
│   │   │   │   │   └── SpecializedSelects
│   │   │   │   └── InputWrapper
```

### State Management

- **Context**: `RuleBuilderContext` provides global state access
- **Hook**: `useRuleBuilderState` manages centralized state logic
- **Immutability**: All state updates create new objects
- **Real-time**: Automatic metadata updates on changes

### File Structure

```
src/
├── features/rule-builder/          # Main feature module
│   ├── components/                 # React components
│   │   ├── RuleBuilderApp.jsx     # Main application
│   │   ├── Group.jsx              # Group container
│   │   ├── Condition.jsx          # Condition manager
│   │   └── condition/             # Condition sub-components
│   ├── context/                   # React Context
│   ├── hooks/                     # Custom hooks
│   └── styles/                    # Feature styles
├── utils/                         # Shared utilities
└── App.jsx                        # Application entry
```

## 🎨 Styling

The application uses TailwindCSS for styling with:

- Responsive design patterns
- Custom CSS for complex layouts
- React Icons for consistent iconography
- Prettier + TailwindCSS plugin for code formatting

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **ESLint**: Configured with React-specific rules
- **Prettier**: Automatic code formatting
- **TailwindCSS Plugin**: Class sorting and formatting

## 🔧 Configuration

### Payment Domain Support

The application includes extensive payment-related constants:

- Payment methods (card, wallet, bank transfer, crypto)
- Geographic restrictions (countries, regions)
- Authentication types (3DS, biometric, PIN)
- Device and platform detection
- Currency and amount-based rules
- Fraud prevention criteria

### Customization

To extend the rule builder:

1. Add new condition types in `utils/constants.js`
2. Create specialized input components in `condition/`
3. Update the state structure in `useRuleBuilderState.js`
4. Add corresponding operators and validation logic

## 📝 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a private project. For internal contributions:

1. Create feature branches from main
2. Follow existing code patterns and conventions
3. Ensure all ESLint rules pass
4. Test thoroughly before submitting PRs

## 📚 Documentation

Additional documentation is available in the `memory-bank/` directory:

- Project overview and architecture
- Component-specific documentation
- State management patterns
- AI integration guidelines
