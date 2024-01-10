import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { ReadMeSection } from "@/types/types";

import { MdDelete } from "react-icons/md";

type handleAddInReadMeType = (id: number) => void;
type handleSelectSection = (id: number) => void;
type handleDeleteInReadMe = (id: number) => void;

interface SectionBarProps {
  readmeSections: ReadMeSection[];
  handleAddInReadMe: handleAddInReadMeType;
  handleSelectSection: handleSelectSection;
  handleDeleteInReadMe: handleDeleteInReadMe;
}

const SectionBar: FC<SectionBarProps> = ({
  readmeSections,
  handleAddInReadMe,
  handleSelectSection,
  handleDeleteInReadMe,
}: SectionBarProps) => {
  return (
    <aside className="w-1/4 bg-gray-800 p-6 text-white">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Sections</h2>
        <Button className="text-sm" variant="ghost">
          Reset
        </Button>
      </div>
      <p className="text-sm mb-4">
        Click on a section below to edit the contents.
      </p>
      <ScrollArea className="h-auto overflow-y-auto my-2">
        <ul className="space-y-2">
          {readmeSections.map((section) => {
            return (
              <>
                {section.inReadme ? (
                  <li>
                    <Button
                      className="w-full justify-between "
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation
                        handleSelectSection(section.id);
                      }}
                    >
                      {section.name}
                      <MdDelete
                        onClick={(e) => {
                          e.stopPropagation(); // Stop event propagation
                          handleDeleteInReadMe(section.id);
                        }}
                      />
                    </Button>
                  </li>
                ) : null}
              </>
            );
          })}
        </ul>
      </ScrollArea>

      <Input
        className="mb-4"
        placeholder="Search for a section"
        type="search"
      />
      <Button className="mb-4" variant="secondary">
        + Custom Section
      </Button>
      <ScrollArea className="h-[calc(100vh-200px)] overflow-y-auto">
        <ul className="space-y-2">
          {readmeSections.map((section) => {
            return (
              <>
                {!section.inReadme ? (
                  <li>
                    <Button
                      className="w-full justify-start"
                      variant="ghost"
                      onClick={() => {
                        handleAddInReadMe(section.id);
                        handleSelectSection(section.id);
                      }}
                    >
                      {section.name}
                    </Button>
                  </li>
                ) : null}
              </>
            );
          })}
        </ul>
      </ScrollArea>
    </aside>
  );
};

export default SectionBar;
