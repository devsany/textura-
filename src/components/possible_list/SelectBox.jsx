import React, { useState } from "react";

const SelectBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSelectBox = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <div>
        <div
          className={`transition-all duration-300 ease-in-out bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ${
            isExpanded ? "w-full p-3" : "w-1/3 p-2"
          }`}
        >
          <select
            id="countries"
            onClick={toggleSelectBox}
            className="bg-transparent focus:outline-none block w-full"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
