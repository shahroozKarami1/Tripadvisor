import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FallDistinationCol from "./FallDistinationCol";
const FallDistinationSec = () => {
  return (
    <Box>
        <Box  sx= {{margin : "1rem  0" }} display={"flex"}>
            <Typography sx={{borderBottom  : "2px  solid #000" ,  padding :  "0.5rem 0"}}>مقاصد پاییزی</Typography>
        </Box>
      <Grid container>
        <FallDistinationCol
          myData={[
            { link: "/", title: "ترکیه" },
            { link: "/", title: "آنتالیا" },
            { link: "/", title: "سنگاپور" },
            { link: "/", title: "ازمیر" },
            { link: "/", title: "شیراز" },
            { link: "/", title: "اهواز" },
            { link: "/", title: "پکن" },
            { link: "/", title: "مسکو" },
            { link: "/", title: "اسکاتلند" },
            { link: "/", title: "آدنا" },
            { link: "/", title: "دوبی" },
            { link: "/", title: "ریاض" },
            { link: "/", title: "اسکاتلند" },
            { link: "/", title: "آدنا" },
            { link: "/", title: "دوبی" },
            { link: "/", title: "ریاض" },
          ]}
        />
      </Grid>
    </Box>
  );
};

export default FallDistinationSec;
