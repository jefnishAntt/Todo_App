import { useState } from "react";
import { FiFilter } from "react-icons/fi";

const Filter = ({setCurrActiveFilter}) => {
  
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50">
      <FiFilter size={14} />
      <div className="flex gap-2 text-xs">
        <button
          className="after:content-['|'] after:pl-2 py-1 px-2 rounded-md focus:bg-white focus:shadow-md"
          onClick={() => {
            setCurrActiveFilter("all");
          }}
        >
          All
        </button>
        <button
          className="after:content-['|'] after:pl-2 py-1 px-2 rounded-md focus:bg-white focus:shadow-md"
          onClick={() => {
            setCurrActiveFilter(true);
          }}
        >
          Completed
        </button>
        <button
          className="py-1 px-2 rounded-md focus:bg-white focus:shadow-md"
          onClick={() => {
            setCurrActiveFilter(false);
          }}
        >
          Incompleted
        </button>
      </div>
    </div>
  );
};

export default Filter;
