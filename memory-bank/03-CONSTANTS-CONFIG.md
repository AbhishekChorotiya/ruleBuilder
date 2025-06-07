# Constants and Configuration Context

## File: `src/utils/constants.js`

## Purpose

Centralized configuration file containing all payment-related constants, data types, operators, and validation rules. Serves as the single source of truth for rule builder domain knowledge.

## Key Exports

### Operator Definitions (`allOperators`)

Maps data types to their available comparison operators:

```javascript
{
  str_value: ["equals", "not equals to"],
  enum_variant: ["is", "contains", "is not", "not contains"],
  metadata_value: ["equals to"],
  number: ["equals to", "greater than", "less than"]
}
```

**Usage**: Determines which operators are available based on selected key type.

### Payment Keys (`allKeys`)

Array of 42 payment-related criteria keys:

- **Payment Methods**: `payment_method`, `card_type`, `wallet`, `upi`, etc.
- **Geographic**: `business_country`, `billing_country`, `issuer_country`
- **Financial**: `amount`, `currency`, `acquirer_fraud_rate`
- **Technical**: `authentication_type`, `capture_method`, `setup_future_usage`
- **Device**: `customer_device_platform`, `customer_device_type`, `customer_device_display_size`
- **Metadata**: `metadata`, `business_label`, `issuer_name`

### Key Type Mapping (`allKeyTypes`)

Maps each key to its data type for validation and UI rendering:

```javascript
{
  payment_method: "enum_variant",    // Dropdown with predefined options
  card_bin: "str_value",            // Text input
  amount: "number",                 // Numeric input
  metadata: "metadata_value"        // Key-value pair input
}
```

**Data Types**:

- **`enum_variant`**: Predefined dropdown options
- **`str_value`**: Free text input
- **`number`**: Numeric input with number operators
- **`metadata_value`**: Key-value pair for custom metadata

### Variant Values (`allVariantValues`)

Comprehensive mapping of enum keys to their possible values:

#### Payment Methods

- **Cards**: Visa, Mastercard, AmericanExpress, JCB, etc.
- **Wallets**: google_pay, apple_pay, paypal, samsung_pay, etc.
- **Bank Methods**: ach, sepa_bank_transfer, ideal, giropay, etc.
- **Alternative**: crypto_currency, boleto, pix, etc.

#### Geographic Data

- **Countries**: Complete list of 195+ countries in standardized format
- **Regions**: Support for all major geographic regions

#### Technical Configurations

- **Authentication**: three_ds, no_three_ds
- **Capture Methods**: automatic, manual, manual_multiple, scheduled
- **Device Platforms**: web, android, ios
- **Device Types**: mobile, tablet, desktop, gaming_console

### Input Sequence (`inputSequence`)

Defines the UI flow for different data types:

```javascript
{
  enum_variant: ["key-item", "operator", "select-value"],
  metadata_value: ["key-item", "key-input", "operator", "value-input"],
  str_value: ["key-item", "operator", "value-input"],
  number: ["key-item", "operator", "value-input"]
}
```

**Purpose**: Controls which input components are rendered and in what order.

## Domain Knowledge Integration

### Payment Processing Context

The constants reflect real-world payment processing requirements:

1. **Compliance**: Support for 3DS authentication requirements
2. **Geographic Restrictions**: Country-based routing and restrictions
3. **Risk Management**: Fraud rate thresholds and device fingerprinting
4. **Business Logic**: Currency restrictions and amount-based rules
5. **Technical Integration**: Platform-specific payment methods

### Data Validation

- **Type Safety**: Each key has a defined type for validation
- **Value Constraints**: Enum types have predefined valid values
- **Operator Logic**: Operators are contextually appropriate for data types

### UI Generation

Constants drive dynamic UI generation:

- **Dropdown Population**: `allVariantValues` populates select options
- **Input Type Selection**: `allKeyTypes` determines input component
- **Operator Availability**: `allOperators` filters available operators
- **Flow Control**: `inputSequence` manages input rendering order

## Integration Points

### State Management

- **Default Values**: `allKeys[0]` used for new conditions
- **Validation**: Type checking against `allKeyTypes`
- **Reset Logic**: Field dependencies managed through type system

### Component System

- **ConditionRow**: Uses constants for rendering logic
- **InputRenderer**: Selects components based on `inputSequence`
- **SelectInput**: Populates options from `allVariantValues`
- **SpecializedSelects**: Handles specific enum types

### Business Logic

- **Rule Evaluation**: Constants define valid rule structures
- **Data Transformation**: Type system guides data processing
- **Validation Rules**: Constraints enforced through constant definitions

## Maintenance Considerations

### Adding New Payment Methods

1. Add key to `allKeys` array
2. Define type in `allKeyTypes`
3. Add operators to `allOperators` if new type
4. Define values in `allVariantValues` if enum
5. Update `inputSequence` if new flow needed

### Data Consistency

- **Naming Convention**: snake_case for all keys
- **Value Format**: Consistent formatting across similar types
- **Type Hierarchy**: Clear distinction between data types

### Performance Impact

- **Static Data**: All constants are static for optimal performance
- **Memory Efficiency**: Shared references across components
- **Bundle Size**: Large constant arrays impact bundle size

## Future Enhancement Areas

### Dynamic Configuration

- **API-driven**: Load constants from external configuration
- **Environment-specific**: Different constants per environment
- **User Customization**: Allow custom payment methods

### Validation Enhancement

- **Schema Validation**: JSON schema for constant validation
- **Type Safety**: TypeScript definitions for constants
- **Runtime Validation**: Validate constant integrity at startup

### Internationalization

- **Localized Labels**: Multi-language support for display names
- **Regional Variants**: Region-specific payment methods
- **Currency Formatting**: Locale-aware currency handling

## Security Considerations

- **Data Sanitization**: All values should be sanitized before use
- **Input Validation**: Constants define valid input boundaries
- **Injection Prevention**: Enum constraints prevent injection attacks

## Testing Strategy

- **Constant Validation**: Unit tests for constant integrity
- **Type Consistency**: Tests for type mapping accuracy
- **Value Completeness**: Tests for missing enum values
- **Integration Tests**: Verify constants work with components
