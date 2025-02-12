import { StyledMultiSelectProps } from "@/types/styledMultiSelect";
import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { MultiSelect } from "react-multi-select-component";

const StyledMultiSelect = ({
  sectionNames,
  selectedSections,
  setSelectedSections,
}: StyledMultiSelectProps) => {
  return (
    <div className="w-1/4 z-10 shadow-sm rounded-lg border border-gray-100">
      <MultiSelect
        options={sectionNames}
        value={selectedSections}
        onChange={setSelectedSections}
        labelledBy={"Filter by Section"}
        className="w-full"
        overrideStrings={{
          selectSomeItems: "Filter by Section",
          allItemsAreSelected: "All Sections",
        }}
        valueRenderer={(selected) => (
          <div className="flex items-center space-x-2">
            <IoFilterOutline className="text-gray-600" />
            <span className="text-sm text-gray-700">
              {selected.length > 0
                ? selected.map((s) => s.label).join(", ")
                : "Filter by section"}
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default StyledMultiSelect;
