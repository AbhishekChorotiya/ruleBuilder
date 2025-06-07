import { IoAdd } from "react-icons/io5";
import { Group } from "./Group";
import { useRuleBuilderContext } from "../context/RuleBuilderContext";

function RuleBuilderApp() {
  const { ruleState, addGroup, removeGroup, updateAuthType, saveRule } =
    useRuleBuilderContext();

  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex justify-center bg-blue-100 p-4">
        <h1 className="text-lg font-semibold text-blue-800">Rule Builder</h1>
      </header>

      <main className="flex h-full w-full flex-col p-4">
        <div className="flex flex-col gap-4">
          {ruleState.groups.map((group, index) => (
            <div key={group.id} className="w-full">
              <Group
                groupId={group.id}
                groupNumber={index + 1}
                onRemove={removeGroup}
                showRemoveButton={ruleState.groups.length > 1}
              />
              {index < ruleState.groups.length - 1 && (
                <div className="flex w-full justify-center py-5">
                  <span className="flex w-fit items-center rounded-lg bg-orange-200 px-4 py-2 font-semibold text-orange-800">
                    {ruleState.betweenGroupsOperator}
                  </span>
                </div>
              )}
            </div>
          ))}

          <div className="mt-5 flex w-full items-center justify-center">
            <button
              onClick={addGroup}
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-orange-800 bg-transparent px-4 py-3 text-orange-800 transition-colors hover:bg-orange-50"
              type="button"
            >
              <IoAdd className="h-5 w-5" />
              Add Group (Joined by OR)
            </button>
          </div>
        </div>

        <div className="py-5">
          <p className="font-medium text-gray-600">then...</p>
        </div>

        <div className="flex items-center gap-5 rounded-lg bg-gray-100 p-5">
          <label htmlFor="auth-type" className="font-medium text-gray-700">
            Auth Type is equal to
          </label>
          <div className="rounded-lg bg-white p-2 shadow-sm">
            <select
              id="auth-type"
              className="rounded-lg border-none bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
              value={ruleState.authenticationRequirement}
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
            className="mt-5 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
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
