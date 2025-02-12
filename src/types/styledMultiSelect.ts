import { SectionOptionProps } from "./sectionOption";

export interface StyledMultiSelectProps {
  sectionNames: SectionOptionProps[];
  selectedSections: SectionOptionProps[];
  setSelectedSections: (selected: SectionOptionProps[]) => void;
}
