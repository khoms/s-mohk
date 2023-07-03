import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import { DrawerMenuItem } from "./utils";
import React from "react";
import DrawerButton from "./DrawerButton";

const DrawerContent = ({ menuList }: { menuList: DrawerMenuItem[][] }) => {
  return (
    <div style={{ background: "#111315", color: "white", height: "100vh" }}>
      <Toolbar /> {/* This is the space between the app bar and the drawer */}
      <Divider />
      <List>
        {menuList.map((list, index) => {
          return (
            <React.Fragment key={index.toString()}>
              {list.map((item, index) => {
                return (
                  <React.Fragment key={item.id + index.toString()}>
                    {/* {listIndex !== menuList.length - 1 && <Divider />} */}
                    <DrawerButton item={item} index={index} />
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default DrawerContent;
