import { FC, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ReadMeSection } from "@/types/types";

import { MdDelete } from "react-icons/md";
import { RotateCcw  } from "lucide-react";

type handleAddInReadMeType = (id: number) => void;
type handleSelectSection = (id: number) => void;
type handleDeleteInReadMe = (id: number) => void;
type handleResetReadMe = () => void;

interface SectionBarProps {
  readmeSections: ReadMeSection[];
  handleAddInReadMe: handleAddInReadMeType;
  handleSelectSection: handleSelectSection;
  handleDeleteInReadMe: handleDeleteInReadMe;
  handleResetReadMe: handleResetReadMe;
}

const SectionBar: FC<SectionBarProps> = ({
  readmeSections,
  handleAddInReadMe,
  handleSelectSection,
  handleDeleteInReadMe,
  handleResetReadMe,
  setReadmeSections,
}: SectionBarProps) => {
  const [customSectionTitle, setCustomSectionTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addCustomSectionToReadMe = (title: string) => {
    const newSection = {
      id: new Date().getTime().toString(),
      name: title,
      markdown: "# " + title,
      selected: true,
      inReadme: true,
      customSection: true,
    };
    setReadmeSections((prevElements) => [...prevElements, newSection]);
    // Close the dialog
    setOpen(false);
    setCustomSectionTitle("");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      console.log("done");
    } else {
      console.log("not done");
    
    }
  }, [searchQuery]);

  return (
    <aside className="w-full bg-gray-800 p-6 text-white overflow-y-scroll max-h-screen">
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Sections</h2>
          <Button
            className="text-sm flex items-center"
            variant="ghost"
            onClick={handleResetReadMe}
          >
            <RotateCcw size={'16px'}/>
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
          className="mb-4 text-black"
          placeholder="Search for a section"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <DialogTrigger asChild>
          <Button className="mb-4" variant="secondary">
            + Custom Section
          </Button>
        </DialogTrigger>
        {/* Model */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Custom Section</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4 w-full">
            <div className="items-center gap-4 w-full">
              <Input
                id="name"
                value={customSectionTitle}
                onChange={(e) => {
                  setCustomSectionTitle(e.target.value);
                }}
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={customSectionTitle.length === 0}
              onClick={() => {
                addCustomSectionToReadMe(customSectionTitle);
              }}
            >
              Add Section
            </Button>
          </DialogFooter>
        </DialogContent>

        <div className="">
          <ul className="space-y-2">
            {readmeSections.length > 0 ? (
              readmeSections
                .filter((section) =>
                  section.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((section) => (
                  <>
                    {!section.inReadme ? (
                      <li key={section.id}>
                        <Button
                          className="w-full justify-start"
                          variant="ghost"
                          onClick={() => {
                            handleAddInReadMe(section.id);
                            handleSelectSection(section.id);
                            setSearchQuery('')
                          }}
                        >
                          {section.name}
                        </Button>
                      </li>
                    ) : null}
                  </>
                ))
            ) : (
              <p>No Section of this name</p>
            )}
          </ul>
        </div>
      </Dialog>
    </aside>
  );
};

export default SectionBar;
