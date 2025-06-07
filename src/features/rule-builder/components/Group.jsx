import { IoClose } from "react-icons/io5";
import { Condition } from "./Condition";

export const Group = ({ groupId, groupNumber, onRemove, showRemoveButton }) => {
  const handleRemove = () => {
    onRemove(groupId);
  };

  return (
    <div className="group">
      <div className="group__header">
        <span className="group__title">Group - {groupNumber}</span>
        {showRemoveButton && (
          <button
            onClick={handleRemove}
            className="group__remove-btn"
            title="Remove Group"
            type="button"
          >
            <IoClose className="group__remove-icon" />
          </button>
        )}
      </div>

      <div className="group__content">
        <Condition groupId={groupId} />
      </div>
    </div>
  );
};
