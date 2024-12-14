import { Box, Container, Stack } from "@mui/material";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import "../src/styles/mainStyles.css";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainHeader from "./components/MainHeader/MainHeader";
const App = () => {
  let router = useRoutes(routes);
  let location = useLocation();
  return (
    <Box>
      {location.pathname !== "/" && <MainHeader />}
      {router}
      <Stack>
        <Box
          bgcolor={"#F2F2F2"}
          sx={{ marginTop: "2rem", padding: "2rem  0", display: "block" }}
        >
          <Container>
            <Footer />
          </Container>
        </Box>
      </Stack>
    </Box>
  );
};

export default App;
