import React from 'react'
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const SectionBar = () => {
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
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Acknowledgements
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              API Reference
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Appendix
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Authors
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Badges
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Color Reference
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Contributing
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Demo
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Deployment
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Documentation
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Environment Variables
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              FAQ
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Features
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Feedback
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              Github Profile - About Me
            </Button>
          </li>
        </ul>
      </ScrollArea>
    </aside>
  );
}

export default SectionBar