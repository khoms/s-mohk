import { useMemo, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { DrawerMenuItem } from "../../components/drawer/utils";
import {
  AccountCircle,
  Business,
  ComputerOutlined,
  Dashboard,
  Inventory,
  Logout,
  Settings,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import ResponsiveDrawer, {
  drawerWidth,
} from "../../components/drawer/ResponsiveDrawer";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Toolbar } from "@mui/material";

const DashboardPage = () => {
  const drawerMenuList: DrawerMenuItem[][] = useMemo(
    () => [
      [
        {
          id: "dashboard",
          text: "Dashboadrd",
          icon: <Dashboard />,
          path: "/",
        },
        {
          id: "pos",
          text: "POS",
          icon: <ComputerOutlined />,
          path: "/pos",
        },
        {
          id: "expenses",
          text: "Expenses",
          icon: <AccountBalanceIcon />,
          path: "/pos",
        },

        {
          id: "inventory",
          text: "Inventory",
          icon: <Inventory />,
          path: "/inventory",
        },

        {
          id: "orders",
          text: "Orders",
          icon: <Business />,
          path: "/order",
        },

        {
          id: "employee",
          text: "Employee",
          icon: <PeopleIcon />,
          path: "/employee",
        },
        {
          id: "setting",
          text: "Settings",
          icon: <Settings />,
          path: "/setting",
        },
        {
          id: "profile",
          text: "Profile",
          icon: <AccountCircle />,
          path: "/profile",
        },
        ,
        {
          id: "log-out",
          text: "Log out",
          icon: <Logout />,
          // path: "/product",

          //   onClick: () => {
          //     logout();
          //     navigate("/");
          //   },
        },
      ],
    ],
    []
  );
  return (
    <Box display="flex">
      <ResponsiveDrawer menuList={drawerMenuList} />
      <Box
        component="main"
        sx={{
          p: { xs: "16px", sm: "32px" },
          pt: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
          // maxWidth: isFullWidthContent ? "undefined" : "1000px",
          maxWidth: "1200px",
        }}
      >
        {/* <Toolbar /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default DashboardPage;
