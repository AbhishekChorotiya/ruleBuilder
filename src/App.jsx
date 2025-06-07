import "./App.css";
import { Group } from "./components/Group";
import { useRuleBuilderContext } from "./context/RuleBuilderContext";

function App() {
  const { ruleState, addGroup, removeGroup, updateAuthType, saveRule } =
    useRuleBuilderContext();

  return (
    <div className="flex h-screen w-full flex-col">
      <p className="flex justify-center bg-blue-100 p-4 text-lg">
        Rule Builder
      </p>
      <div className="flex h-full w-full flex-col p-4">
        {ruleState.groups.map((group, index) => (
          <div key={group.id}>
            <Group
              groupId={group.id}
              groupNumber={index + 1}
              onRemove={removeGroup}
              showRemoveButton={ruleState.groups.length > 1}
            />
            {index < ruleState.groups.length - 1 && (
              <div className="flex w-full justify-center py-5">
                <span className="flex w-fit items-center rounded-lg bg-orange-100 p-2 px-4 font-semibold text-orange-800">
                  {ruleState.groupOperator}
                </span>
              </div>
            )}
          </div>
        ))}
        <div className="mt-5 flex w-full items-center justify-center">
          <button
            onClick={addGroup}
            className="w-full rounded-lg border-2 border-dashed border-orange-800 px-4 py-2 text-orange-800 hover:bg-orange-50"
          >
            + Add Group (Joined by OR)
          </button>
        </div>
        <div className="p-5">
          <p>then...</p>
        </div>

        <div className="flex items-center gap-5 bg-gray-100 p-5">
          <p>Auth Type is equal to </p>
          <div className="bg-white p-2">
            <select
              className="rounded-lg"
              value={ruleState.authType}
              onChange={(e) => updateAuthType(e.target.value)}
            >
              <option value="any">Any</option>
              <option value="all">All</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="py-5">
          <button
            onClick={saveRule}
            className="mt-5 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Save Rule
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
