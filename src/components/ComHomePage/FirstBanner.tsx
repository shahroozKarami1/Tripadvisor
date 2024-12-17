import { Box, Button, Typography } from "@mui/material";
import { CusFirstBanner, DarkOverlay } from "../../elements/CusComponets";
import styled from "@emotion/styled";
import Grid  from "@mui/material/Grid2"
import { useMedia } from "../../context/MediaQueryContext";
const FirstBanner = () => {

  let isXs  =  useMedia ()
  const CusBoxBanner = styled(Box)({
    left: "10px",
    // position :"relative" ,
    top: "200px",
    display: "flex", 
    alignItems: "center",
    height: "100%",
    justifyContent: "end",
    marginLeft:   !isXs ?  "2rem" : 0,

  width : "100%" ,  
    backgroundColor : isXs ?  "rgba(0 ,  0 ,  0 ,  0.6)" : ""   ,  padding : isXs ?  "1rem "  :  0 
  });
  const CusBtnBanner = styled(Button)({
    backgroundColor: "#fff",

    color: `var(--dark-color)`,
  });
  return (
    <CusFirstBanner>
      {
        isXs && 
        <DarkOverlay />

      }
      <Grid container    height={"100%"}>
      <CusBoxBanner>
        <Box display={"flex"}   flexDirection={"column"} gap={2}>
          <Box display={"flex"} gap={1}>
            <Typography sx={{ color: "#fff", fontSize: "0.75rem" }}>
              ساخته شده با
            </Typography>
            <Typography
              sx={{
                bgcolor: "#fff",
                fontSize: "0.75rem",
                borderRadius: "0.5rem",
                padding: "0.10rem",
              }}
            >
              هوش مصنوعی
            </Typography>
          </Box>
          <Typography
            sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            سازنده سفر با هوش مصنوعی شما را به آنجا می رساند
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            ایده هایی را که برای شما ساخته شده اند، در چند ثانیه آماده کنید.
          </Typography>
          <Box sx={{marginTop : "1rem"  }}>
            <CusBtnBanner>امتحانش کن !</CusBtnBanner>
          </Box>
        </Box>
      </CusBoxBanner>

      </Grid>
    </CusFirstBanner>
  );
};

export default FirstBanner;
