import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import classes from "./Drawer2.module.css";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import ListItemLink from "../components/ListItemLink";

type Props = Record<string, never>;

export default function Drawer2() {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItemLink text="Home" to="/" open={true} />
          <ListItem button onClick={handleToggle}>
            <ListItemText primary="Drawer 1" />
          </ListItem>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Drawer 2" />
            </ListItem>
          </List>
        </List>
      </Drawer>
      <main className={classes.content}>
        <h1>Main Content</h1>
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button onClick={handleToggle}>
            <ListItemText primary="Drawer 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
