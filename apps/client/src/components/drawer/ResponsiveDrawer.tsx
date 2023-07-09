import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import "./ResponsiveDrawer.css";
import { DrawerMenuItem } from "./utils";
import DrawerContent from "./DrawerContent";
// import MainAppBar from "./MainAppBar";

export const drawerWidth = 240;

interface ResponsiveDrawerProps {
  window?: () => Window;
  children?: React.ReactNode;
  menuList: DrawerMenuItem[][];
  // appBarLogo: string;
}

const ResponsiveDrawer = ({
  window,
  menuList,
}: // appBarLogo,
ResponsiveDrawerProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [changeView, setChangeView] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      {/* <MainAppBar appBarLogo={appBarLogo} onDrawerToggle={handleDrawerToggle} /> */}
      <Box display="flex">
        {!changeView ? (
          <Box
            component="nav"
            className="container-Box"
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              <DrawerContent menuList={menuList} />
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              <DrawerContent menuList={menuList} />
            </Drawer>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
