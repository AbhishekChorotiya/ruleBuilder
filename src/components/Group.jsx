import { Condition } from "./Condition";

export const Group = () => {
  return (
    <div className="h-fit w-full rounded-lg border border-gray-300">
      <div className="w-full bg-gray-200 p-2 px-4">Group - 1</div>

      <div className="p-5">
        <Condition />
      </div>
    </div>
  );
};
