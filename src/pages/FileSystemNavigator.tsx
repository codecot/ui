import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import useSWR from 'swr';

import "./FileSystemNavigator.module.css";

type RenderTree = {
  id: string;
  name: string;
  children?: readonly RenderTree[];
};

const data: RenderTree = {
  id: "root",
  name: "Parent",
  children: [
    {
      id: "1",
      name: "Child - 1",
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4",
        },
      ],
    },
  ],
};

function fetcher<T>(url: string): Promise<T> {
  return fetch(url).then((response) => response.json());
}

const renderTree = (nodes: RenderTree) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
  </TreeItem>
);

export default function FileSystemNavigator() {
  const { data, isLoading, error } = useSWR('http://localhost:3000/api/v1/files', fetcher<RenderTree>);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon/>}
      defaultExpandIcon={<ChevronRightIcon/>}
      defaultExpanded={["src  "]}
      sx={{ height: '100%', flexGrow: 1, maxWidth: 200, overflowY: "auto" }}
    >
      {renderTree(data)}
    </TreeView>
  );
}

