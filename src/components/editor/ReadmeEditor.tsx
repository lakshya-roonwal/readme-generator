import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Editor from "@monaco-editor/react";
import MarkdownEditor from './MarkdownEditor';

const ReadmeEditor = ({ readmeSections, setReadmeSections }: any) => {

   const [readmeMarkdown, setReadmeMarkdown] = useState<string | null>(null);

   useEffect(() => {
     // Find the first object with selected set to true
     const selectedObject = readmeSections.find((section) => section.selected);

     // Set the selected section state
     setReadmeMarkdown((prevMarkdown) => selectedObject || null);
   }, [readmeSections]);

   console.log(readmeMarkdown);

  const handleTextareaChange = (markdown: string) => {
        setReadmeSections((prevElements) =>
          prevElements.map((element) =>
            element.id === readmeMarkdown.id
              ? { ...element, ["markdown"]: markdown }
              : element
          )
        );
  };
  return (
    <section className="w-1/2 bg-gray-700 p-6">
      {readmeMarkdown ? (
        <Tabs defaultValue="texteditor">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Editor</h2>
            <div className="flex space-x-2">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="texteditor">Text Editor</TabsTrigger>
                <TabsTrigger value="markdown">Markdown</TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent value="texteditor">
            <Textarea
              value={readmeMarkdown?.markdown}
              onChange={(e) => {
                handleTextareaChange(e.target.value);
              }}
              className="h-[calc(100vh-100px)]"
              placeholder="Type your markdown here."
            />
          </TabsContent>
          <TabsContent value="markdown">
            <MarkdownEditor
              readme={readmeMarkdown?.markdown}
              handleTextareaChange={handleTextareaChange}
            />
          </TabsContent>
        </Tabs>
      ) : (
        <div className="w-full border-1 text-center items-center p-4">
          <p className='text-white'>Select a section from sidebar to edit</p>
        </div>
      )}
    </section>
  );
};

export default ReadmeEditor