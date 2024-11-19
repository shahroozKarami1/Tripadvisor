import { Box, Container, Stack } from "@mui/material";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import "../src/styles/mainStyles.css";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/MainHeader/MainHeader";
const App = () => {
  let router = useRoutes(routes);
  let location = useLocation();
  console.log(location);
  return (
    <Box>
      {location.pathname !== "/" && <MainHeader />}
      {router}
   {/* <Stack>
   <Box  bgcolor={"#F2F2F2"} sx={{ marginTop: "20rem", padding: "2rem  0"  ,  display :"block" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
   </Stack> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

export default App;
