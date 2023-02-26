import * as React from "react";
import ListItem from "@mui/material/ListItem";
import MuiListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { styled } from "@mui/material/styles";

type ListItemLinkProps = {
  icon?: React.ReactElement;
  text: string;
  to: string;
  open: boolean;
};

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

// import { Link as RouterLink } from 'react-router-dom';
// import Link as MaterialLink from '@material-ui/core/Link';
//
// <MaterialLink component={RouterLink} to='/path/to/section'/>

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  "& .MuiTypography-root ": {
    color: theme.palette.text.primary,
  },
  "& .active .MuiTypography-root": {
    fontWeight: "bold",
  },
}));

export default function ListItemLink({
  icon,
  text,
  to,
  open,
}: ListItemLinkProps): React.ReactElement {
  return (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
      component={RouterLink}
      to={to}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        {icon ? (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
