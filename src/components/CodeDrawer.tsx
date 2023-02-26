import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";

import ListItemLink from "./ListItemLink";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const CodeDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export type CodeDrawerProps = {
  open: boolean;
  onClose: () => void;
};
const CodeDrawer: React.FC<CodeDrawerProps> = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <CodeDrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </CodeDrawerHeader>
      <Divider />
      <List>
        <ListItemLink text="Home" to="/" open={open} icon={<HomeIcon />} />
        <ListItemLink
          text="Monaco"
          to="/monaco"
          open={open}
          icon={<DescriptionIcon />}
        />
        <ListItemLink
          text="Monaco"
          to="/treeview"
          open={open}
          icon={<AccountTreeIcon />}
        />
        <ListItemLink
          text="Drawer2"
          to="/drawer2"
          open={open}
          icon={<AccountTreeIcon />}
        />
      </List>
      <Divider />
    </Drawer>
  );
};

export default CodeDrawer;
