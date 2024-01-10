import { Editor } from "@monaco-editor/react";

const MarkdownEditor = ({readme,handleTextareaChange}) => {
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
}

export default MarkdownEditor