import React from "react";

import "./Monaco.css";
import CodeEditor from "../components/CodeEditor";
import FileSystemNavigator from "./FileSystemNavigator";
import Stack from "@mui/material/Stack";

function Monaco() {
  return (
    <div className="Monaco">
      <Stack>
        <FileSystemNavigator />
        <CodeEditor />
      </Stack>
    </div>
  );
}

export default Monaco;
