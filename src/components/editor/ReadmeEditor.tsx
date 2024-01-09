import React from 'react'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ReadmeEditor = () => {
  return (
    <section className="w-1/2 bg-gray-700 p-6 text-white">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Editor</h2>
        <div className="flex space-x-2">
          <Button className="text-sm" variant="ghost">
            Text Editor
          </Button>
          <Button className="text-sm" variant="ghost">
            Markdown
          </Button>
        </div>
      </div>
      <Textarea
        className="h-[calc(100vh-100px)]"
        placeholder="Type your markdown here."
      />
    </section>
  );
}

export default ReadmeEditor