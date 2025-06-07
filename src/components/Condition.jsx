import { useState } from "react";
import {
  allKeys,
  allKeyTypes,
  allOperators,
  allVariantValues,
  inputSequence,
} from "../utils/constants";

const SelectKeyItem = ({ allKeys, handleKeyChange }) => {
  return (
    <div className="bg-white p-2">
      <select name="key-item" onChange={handleKeyChange}>
        {allKeys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

const SelectOperator = ({ operators, handleKeyChange }) => {
  return (
    <div className="bg-white p-2">
      <select name="operator" onChange={handleKeyChange}>
        {operators.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

const SelectValue = ({ values, handleKeyChange }) => {
  return (
    <div className="bg-white p-2">
      <select name="select-value" onChange={handleKeyChange}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export const Condition = () => {
  const [selectedKey, setSelectedKey] = useState(allKeys[0]);
  const selectedKeyType = allKeyTypes[selectedKey];
  const operators = allOperators[selectedKeyType] || [];
  const valuesForSelectedKey =
    selectedKeyType == "enum_variant" ? allVariantValues[selectedKey] : [];
  const inputSequenceValue = inputSequence[selectedKeyType] || [];
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  console.log("inputSequenceValue:", inputSequenceValue, selectedKeyType);
  const handleKeyChange = (e) => {
    if (e.target.name === "key-item") {
      setSelectedKey(e.target.value);
    }
    if (e.target.name === "operator") {
      setSelectedOperator(e.target.value);
    }
    if (e.target.name === "select-value") {
      setSelectedValue(e.target.value);
    }
    console.log("Selected key:", e.target.value);
  };
  return (
    <div className="w-full flex-col gap-4">
      <div className="flex min-h-16 w-full items-center gap-4">
        <div>
          <span className="flex items-center rounded-lg bg-green-100 p-2 px-4 font-semibold text-green-800">
            IF
          </span>
        </div>
        <div className="flex h-full w-full flex-wrap items-center gap-4 rounded-lg bg-gray-100 p-2 px-4">
          {inputSequenceValue.map((inputType, index) => {
            if (inputType === "key-item") {
              return (
                <SelectKeyItem
                  allKeys={allKeys}
                  handleKeyChange={handleKeyChange}
                  key={index}
                />
              );
            } else if (inputType === "operator") {
              return (
                <SelectOperator
                  operators={operators}
                  handleKeyChange={handleKeyChange}
                  key={index}
                />
              );
            } else if (inputType === "select-value") {
              return (
                <SelectValue
                  values={valuesForSelectedKey}
                  handleKeyChange={handleKeyChange}
                  key={index}
                />
              );
            } else if (inputType === "value-input") {
              return (
                <div key={index} className="bg-white p-2">
                  <input type="text" inputType={inputType} />
                </div>
              );
            } else if (inputType === "key-input") {
              return (
                <div key={index} className="bg-white p-2">
                  <input type="text" inputType={inputType} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
