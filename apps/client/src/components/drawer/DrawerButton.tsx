import { Box, Collapse, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Color from "utils/Color";
import { useLocation, useNavigate } from "react-router-dom";
import { DrawerMenuItem } from "./utils";
import { useState } from "react";
import Color from "../../utils/Color";

const DrawerButton: React.FC<{ item: DrawerMenuItem; index: number }> = ({
  item,
}) => {
  const [open, setOpen] = useState(false);
  const hasSubMenu = item.subMenu;
  const { text, icon, path, onClick } = item;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const selectedPath = pathname === path;

  const onNavigateHandler = () => {
    onClick ? onClick() : path ? navigate(path) : undefined;
  };

  return (
    <>
      <Stack
        direction="row"
        paddingX={1}
        marginX="10px"
        paddingY="10px"
        marginBottom="5px"
        justifyContent="space-between"
        alignItems="center"
        bgcolor={selectedPath ? Color.HoverBg : ""}
        color={selectedPath ? Color.White : ""}
        sx={{
          borderLeft: "8px solid transparent",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: selectedPath ? Color.HoverBg : Color.Background,
            color: selectedPath ? Color.White : Color.Space,
          },
        }}
        onClick={() => {
          setOpen((prev) => !prev);
          onNavigateHandler();
        }}
        borderRadius="10px"
      >
        <Stack direction="row" alignItems="center" gap={2}>
          {icon}
          <Typography lineHeight="115%">{text}</Typography>
        </Stack>
        <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
        <Box>
          {open ? (
            <KeyboardArrowUpIcon
              sx={{ opacity: `${hasSubMenu ? "1" : "0"}` }}
            />
          ) : (
            <KeyboardArrowDownIcon
              sx={{ opacity: `${hasSubMenu ? "1" : "0"}` }}
            />
          )}
        </Box>
      </Stack>
      {item.subMenu && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            marginLeft: "15px",
          }}
        >
          {item.subMenu.map((item, index) => {
            return <DrawerButton item={item} index={index} key={index} />;
          })}
        </Collapse>
      )}
    </>
  );
};

export default DrawerButton;
