import { SectionOption } from "./sectionOption";

export interface StyledMultiSelectProps {
  sectionNames: SectionOption[];
  selectedSections: SectionOption[];
  setSelectedSections: (selected: SectionOption[]) => void;
}
