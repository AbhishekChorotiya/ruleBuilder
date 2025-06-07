// Condition label component that can display different label types
export const ConditionLabel = ({ labelType = "IF" }) => {
  // Define styling based on label type
  const getStyleClasses = (type) => {
    switch (type) {
      case "IF":
        return "bg-green-100 text-green-800";
      case "AND":
        return "bg-orange-200 text-orange-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="flex items-center">
      <span
        className={`flex items-center rounded-lg px-4 py-2 font-semibold ${getStyleClasses(labelType)}`}
      >
        {labelType}
      </span>
    </div>
  );
};
