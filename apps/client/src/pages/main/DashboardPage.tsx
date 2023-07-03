import { useMemo } from "react";
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
import ResponsiveDrawer from "../../components/drawer/ResponsiveDrawer";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const DashboardPage = () => {
  const drawerMenuList: DrawerMenuItem[][] = useMemo(
    () => [
      [
        {
          id: "dashboard",
          text: "Dashboadrd",
          icon: <Dashboard />,
          path: "/dashboard",
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
    <>
      <Box>
        <ResponsiveDrawer menuList={drawerMenuList} />
      </Box>
    </>
  );
};

export default DashboardPage;
