import { Box, Button, Typography } from "@mui/material";
import { CusFirstBanner } from "../../elements/CusComponets";
import styled from "@emotion/styled";

const FirstBanner = () => {
  const CusBoxBanner = styled(Box)({
    left: "10px",
    // position :"relative" ,
    top: "200px",
    display: "flex", 
    
    alignItems: "center",
    height: "100%",
    justifyContent: "end",
    marginLeft: "2rem",
  });
  const CusBtnBanner = styled(Button)({
    backgroundColor: "#fff",

    color: `var(--dark-color)`,
  });
  return (
    <CusFirstBanner>
      <CusBoxBanner>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
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
          <Box sx={{marginTop : "1rem"}}>
            <CusBtnBanner>امتحانش کن !</CusBtnBanner>
          </Box>
        </Box>
      </CusBoxBanner>
    </CusFirstBanner>
  );
};

export default FirstBanner;
