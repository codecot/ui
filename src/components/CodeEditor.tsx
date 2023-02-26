import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Editor from "@monaco-editor/react";
import Box from "@mui/material/Box";

import "./CodeEditor.module.css";

export default function CodeEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current ? editorRef.current.getValue() : null);
  }

  return (
    <Box className='Editor'>
      <Button onClick={showValue}>Show value</Button>
      <Editor
        height="90vh"
        defaultLanguage="typescript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </Box>
  );
}