import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import "github-markdown-css"; // Import GitHub Markdown CSS
import remarkGfm from "remark-gfm";

const MainSection = ({readme}:any) => {

  return (
    <section className="w-1/3 bg-white p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
        <div className="flex space-x-2">
          <Button className="text-sm" variant="ghost">
            Preview
          </Button>
          <Button className="text-sm" variant="ghost">
            Raw
          </Button>
        </div>
      </div>
      <div className="h-[calc(100vh-100px)] overflow-y-auto">
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={readme} />{" "}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
