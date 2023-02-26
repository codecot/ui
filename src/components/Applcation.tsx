import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import CodeAppBar from "./CodeAppBar";
import CodeDrawer, { CodeDrawerHeader } from "./CodeDrawer";

type Props = Record<string, never>;

export default function withApplication(WrappedComponent: React.ComponentType<Props>) {
  return function Application() {
    // const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
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

          <WrappedComponent />

        </Box>
      </Box>
    );
  };
}
