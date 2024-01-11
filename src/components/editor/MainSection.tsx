import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import "github-markdown-css"; // Import GitHub Markdown CSS
import remarkGfm from "remark-gfm";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MainSection = ({readmeSections}:any) => {

  const [readme, setReadme] = useState('')

  useEffect(()=>{
    // setReadme(()=>{
    //   return readmeSections.map((e)=>{e.markdown})
    // })
    const concatenatedMarkdown = readmeSections
      .filter((section) => section.inReadme)
      .map((section) => section.markdown)
      .join("\n");
    setReadme(concatenatedMarkdown);
  },[readmeSections])

  return (
    <section className="w-1/2 bg-white p-6">
      <Tabs defaultValue="preview">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
          <div className="flex space-x-2">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="raw">Raw</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="max-h-screen">
          <TabsContent value="preview">
            <div className="markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                children={readme}
                className={"h-[calc(100vh-150px)] overflow-y-auto"}
              />
            </div>
          </TabsContent>
          <TabsContent value="raw" className="h-[calc(100vh-150px)]">
            <textarea
              readOnly
              className="h-full w-full border-1  resize-none bg-white dark:bg-gray-800 focus:outline-none"
              value={readme}
            ></textarea>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default MainSection;
