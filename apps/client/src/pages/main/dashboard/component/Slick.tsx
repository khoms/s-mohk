import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import Color from "../../../../utils/Color";

const SlickerBody = ({ content }: { content: string }) => {
  return (
    <Box
      pb={4}
      width="full"
      height="150px"
      bgcolor={Color.SpaceGray}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>{content}</Typography>
    </Box>
  );
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slideToShow: 3,
  slidesToScroll: 1,
  // autoPlay: true,
  // autoPlaySpeed: 2000,
};
const SlickSlider = () => {
  return (
    <Box flex={1} maxWidth="30vw" bgcolor="red">
      <Slider {...settings} arrows={false} autoplay={true} autoplaySpeed={6000}>
        <SlickerBody content="This is 1st slider" />
        <SlickerBody content="This is 2nd slider" />
        <SlickerBody content="This is 3rd slider" />
        <SlickerBody content="This is 4th slider" />
      </Slider>
    </Box>
  );
};

export const SlickSlider2 = () => {
  return (
    <Box flex={1} maxWidth="30vw">
      <Slider {...settings} arrows={false} autoplay={true} autoplaySpeed={6000}>
        <SlickerBody content="This is 1st slider" />
        <SlickerBody content="This is 2nd slider" />
        <SlickerBody content="This is 3rd slider" />
        <SlickerBody content="This is 4th slider" />
      </Slider>
    </Box>
  );
};

export default SlickSlider;
