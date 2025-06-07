import { Condition } from "./Condition";

export const Group = ({ groupId, groupNumber, onRemove, showRemoveButton }) => {
  const handleRemove = () => {
    onRemove(groupId);
  };

  return (
    <div className="h-fit w-full rounded-lg border border-gray-300">
      <div className="flex w-full items-center justify-between bg-gray-200 p-2 px-4">
        <span>Group - {groupNumber}</span>
        {showRemoveButton && (
          <button
            onClick={handleRemove}
            className="rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600"
            title="Remove Group"
          >
            ×
          </button>
        )}
      </div>

      <div className="p-5">
        <Condition groupId={groupId} />
      </div>
    </div>
  );
};
