import { IoClose } from "react-icons/io5";
import { Condition } from "./Condition";

export const Group = ({ groupId, groupNumber, onRemove, showRemoveButton }) => {
  const handleRemove = () => {
    onRemove(groupId);
  };

  return (
    <div className="h-fit w-full rounded-lg border border-gray-300 shadow-sm">
      <div className="flex w-full items-center justify-between rounded-t-lg bg-gray-200 px-4 py-2">
        <span className="font-medium text-gray-700">Group - {groupNumber}</span>
        {showRemoveButton && (
          <button
            onClick={handleRemove}
            className="flex items-center justify-center rounded bg-red-500 p-1 text-white transition-colors hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
            title="Remove Group"
            type="button"
          >
            <IoClose className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="p-5">
        <Condition groupId={groupId} />
      </div>
    </div>
  );
};
