import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MonacoPage from "./pages/Monaco";

import "./App.css";
import FileSystemNavigatorPage from "./pages/FileSystemNavigator";
import Drawer2 from "./pages/Drawer2";
import withApplication from "./components/Applcation";

const Home = withApplication(HomePage);
const Monaco = withApplication(MonacoPage);
const FileSystemNavigator = withApplication(FileSystemNavigatorPage);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monaco" element={<Monaco />} />
        <Route path="/treeview" element={<FileSystemNavigator />} />
        <Route path="/drawer2" element={<Drawer2 />} />
      </Routes>
    </Router>
  );
}
