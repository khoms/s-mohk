import { Box } from "@mui/material";
import Header from "./component/Header";
import SlickSlider, { SlickSlider2 } from "./component/Slick";
import { LineChart } from "./component/chart/LineChart";
import DoughnutChart from "./component/chart/DoughnutChart";
import Color from "../../../utils/Color";

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" gap={4} width="100%">
      <Header />
      <Box
        gap={2}
        display="flex"
        justifyContent="center"
        maxWidth="100%"
        bgcolor="red"
        height="200px"
        sx={{ opacity: 0.3 }}
      >
        {/* <Box>
          <SlickSlider />
        </Box>
        <Box>
          <SlickSlider2 />
        </Box> */}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={3}
        sx={{
          // width: { xs: "100vw", md: "100%" },
          flexDirection: { xs: "column", md: "row" },
        }}
        maxWidth="100%"
      >
        <Box flex={2}>
          <LineChart />
          <Box
            sx={{
              height: "200px",
              width: "100%",
              my: 4,
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              aligItems: "center",
            }}
          >
            <Box
              bgcolor="red"
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              THis is box1
            </Box>
            <Box
              bgcolor="grey"
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              This is box 2
            </Box>
          </Box>
        </Box>
        <Box flex={1}>
          <DoughnutChart />
        </Box>
      </Box>
      <Box display="flex" gap={3} width="100%"></Box>
    </Box>
  );
};

export default HomePage;
