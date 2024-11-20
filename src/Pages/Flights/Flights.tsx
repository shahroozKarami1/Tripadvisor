import { Box, Container, Typography } from "@mui/material";
import MainBanner from "../../components/MainBanner/MainBanner";
import Grid from "@mui/material/Grid2";
import InpSearch from "../../components/InpSearch/InpSearch";

const Flights = () => {
  return (
    <Box>
      <MainBanner bannerUrl="/public/images/FlightsImg/Banner.png">
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={2}
          >
            <Grid size={{ md: 12 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "2.5rem",
                  textAlign: "center",
                  marginBottom: "3rem",
                }}
              >
                بهترین پرواز را با قیمت مناسب پیدا کنید{" "}
              </Typography>
              <InpSearch isBtnSearch={false} />
            </Grid>
          </Grid>
        </Container>
      </MainBanner>
    </Box>
  );
};

export default Flights;
