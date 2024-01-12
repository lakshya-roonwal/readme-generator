import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import "github-markdown-css"; // Import GitHub Markdown CSS
import remarkGfm from "remark-gfm";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";


const MainSection = ({readmeSections}:any) => {

  const [readme, setReadme] = useState('')
  const [copy, setcopy] = useState(false);

  const handleDownload=()=>{
    const blob = new Blob([readme], { type: "text/markdown" });

    // Create a download link
    const downloadLink = document.createElement("a");

    // Set the download link's href to a URL created from the Blob
    downloadLink.href = URL.createObjectURL(blob);

    // Set the file name for the download
    downloadLink.download = "Readme.md";

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);

  }

  useEffect(()=>{
    const concatenatedMarkdown = readmeSections
      .filter((section) => section.inReadme)
      .map((section) => section.markdown)
      .join("\n");
    setReadme(concatenatedMarkdown);
  },[readmeSections])

  return (
    <section className="w-1/2 bg-white p-6 overflow-x-scroll">
      <Tabs defaultValue="preview">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
          <div className="flex space-x-2">
            <Button variant="default" onClick={handleDownload}>
              <MdOutlineFileDownload className="mr-2 h-6 w-6" />
              Download
            </Button>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="raw">Raw</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div
          className="max-h-screen"
        >
          <TabsContent value="preview">
            <div className="markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                children={readme}
                className={"h-[calc(100vh-150px)] overflow-y-auto"}
              />
            </div>
          </TabsContent>
          <TabsContent value="raw" className="">
            <div className="flex flex-col ">
              <div className="w-full flex justify-end px-4">
                {copy ? (
                  <Button
                    variant="outline"
                    size="icon"
                    className="py-1 inline-flex items-center gap-1"
                  >
                    <LuClipboardCheck size={"18px"} />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="icon"
                    className="py-1 inline-flex items-center gap-1"
                    onClick={() => {
                      navigator.clipboard.writeText(readme);
                      setcopy(true);
                      setTimeout(() => {
                        setcopy(false);
                      }, 3000);
                    }}
                  >
                    <LuClipboard size={"18px"} />
                  </Button>
                )}
              </div>
              <textarea
                readOnly
                className="h-[calc(100vh-150px)] w-full border-1  resize-none bg-white dark:bg-gray-800 focus:outline-none"
                value={readme}
              ></textarea>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default MainSection;
