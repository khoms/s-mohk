import { Box } from "@mui/material";
import Header from "./component/Header";
import SlickSlider, { SlickSlider2 } from "./component/Slick";
import { LineChart } from "./component/chart/LineChart";

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Header />
      <Box gap={2} display="flex" justifyContent="center" maxWidth="100%">
        <Box>
          <SlickSlider />
        </Box>
        <Box>
          <SlickSlider2 />
        </Box>
      </Box>
      <Box display="flex" gap={3} width="100%"></Box>
    </Box>
  );
};

export default HomePage;
