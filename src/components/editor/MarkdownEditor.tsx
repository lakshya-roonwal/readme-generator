import { Editor } from "@monaco-editor/react";
import { FC } from 'react'

type handleTextareaChange = (markdown: string) => void;

interface MarkdownEditorProps {
  readme: string;
  handleTextareaChange: handleTextareaChange;
}
const MarkdownEditor: FC<MarkdownEditorProps> = ({
  readme,
  handleTextareaChange,
}) => {
  return (
    <div>
      <Editor
        className="h-[calc(100vh)]"
        defaultLanguage="markdown"
        defaultValue={readme}
        theme="vs-dark"
        options={{
          minimap: {
            enabled: false,
          },
          wordWrap: true,
        }}
        onChange={(e) => {
          handleTextareaChange(e);
        }}
      />
    </div>
  );
};

export default MarkdownEditor