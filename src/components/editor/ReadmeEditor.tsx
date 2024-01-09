import React from 'react'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Editor from "@monaco-editor/react";
import MarkdownEditor from './MarkdownEditor';

const ReadmeEditor = ({readme,setReadme}:any) => {
    const handleTextareaChange = (markdown:string) => {
      setReadme(markdown);
    };
  return (
    <section className="w-1/2 bg-gray-700 p-6">
      <Tabs>
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
            value={readme}
            onChange={handleTextareaChange}
            className="h-[calc(100vh-100px)]"
            placeholder="Type your markdown here."
          />
        </TabsContent>
        <TabsContent value="markdown">
          <MarkdownEditor
            readme={readme}
            handleTextareaChange={handleTextareaChange}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default ReadmeEditor