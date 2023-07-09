import { Box, MenuItem, Select, Typography } from "@mui/material";
import Color from "../../../../utils/Color";
import { useState } from "react";

const Header = () => {
  const [selectedData, setSelectedData] = useState("all");
  return (
    <>
      <Box width="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Typography variant="h2" color={Color.LighterGray}>
            S-MOHK
          </Typography>
          <Select
            value={selectedData}
            label="Data"
            sx={{
              paddingX: 4,
              color: "white",
              borderColor: Color.Red,
              bgcolor: Color.SpaceGray,
            }}
            onChange={(e) => setSelectedData(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  );
};

export default Header;
