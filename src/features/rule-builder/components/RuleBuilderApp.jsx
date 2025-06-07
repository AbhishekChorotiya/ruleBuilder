import { IoAdd } from "react-icons/io5";
import { Group } from "./Group";
import { useRuleBuilderContext } from "../context/RuleBuilderContext";
import "../styles/RuleBuilder.css";

function RuleBuilderApp() {
  const { ruleState, addGroup, removeGroup, updateAuthType, saveRule } =
    useRuleBuilderContext();

  return (
    <div className="rule-builder">
      <header className="rule-builder__header">
        <h1 className="rule-builder__title">Rule Builder</h1>
      </header>

      <main className="rule-builder__content">
        <div className="rule-builder__groups">
          {ruleState.groups.map((group, index) => (
            <div key={group.id} className="rule-builder__group-container">
              <Group
                groupId={group.id}
                groupNumber={index + 1}
                onRemove={removeGroup}
                showRemoveButton={ruleState.groups.length > 1}
              />
              {index < ruleState.groups.length - 1 && (
                <div className="rule-builder__group-operator">
                  <span className="rule-builder__operator-badge">
                    {ruleState.groupOperator}
                  </span>
                </div>
              )}
            </div>
          ))}

          <div className="rule-builder__add-group">
            <button
              onClick={addGroup}
              className="rule-builder__add-group-btn"
              type="button"
            >
              <IoAdd className="rule-builder__add-icon" />
              Add Group (Joined by OR)
            </button>
          </div>
        </div>

        <div className="rule-builder__then-section">
          <p className="rule-builder__then-text">then...</p>
        </div>

        <div className="rule-builder__auth-section">
          <label htmlFor="auth-type" className="rule-builder__auth-label">
            Auth Type is equal to
          </label>
          <div className="rule-builder__auth-select-wrapper">
            <select
              id="auth-type"
              className="rule-builder__auth-select"
              value={ruleState.authType}
              onChange={(e) => updateAuthType(e.target.value)}
            >
              <option value="any">Any</option>
              <option value="all">All</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="rule-builder__actions">
          <button
            onClick={saveRule}
            className="rule-builder__save-btn"
            type="button"
          >
            Save Rule
          </button>
        </div>
      </main>
    </div>
  );
}

export default RuleBuilderApp;
