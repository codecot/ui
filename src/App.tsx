import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import CodeAppBar from "./components/CodeAppBar";
import CodeDrawer, { CodeDrawerHeader } from "./components/CodeDrawer";
import Home from "./pages/Home";
import Monaco from "./pages/Monaco";

import "./App.css";
import FileSystemNavigator from "./pages/FileSystemNavigator";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CodeAppBar
          open={open}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
        />
        <CodeDrawer open={open} onClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <CodeDrawerHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monaco" element={<Monaco />} />
            <Route path="/treeview" element={<FileSystemNavigator />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
