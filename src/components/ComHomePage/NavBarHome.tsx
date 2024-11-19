import { Box, Container, List, ListItem } from "@mui/material";
import { CusTitleHomePage } from "../../elements/CusComponets";
import NavbarMenu from "./NavBarMenu";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import  Grid  from "@mui/material/Grid2"
import InpSearch from "../InpSearch/InpSearch";
const NavBarHome = () => {
  return (
    <Box sx={{ marginTop: "4rem" }}>
      <Container>
      <Grid  container alignItems={"center"}  justifyContent={"center"}>
        <Grid  size ={{md  : 12}}>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <CusTitleHomePage>کجا میخوای بری</CusTitleHomePage>
          <Box>
            <List sx={{ display: "flex"  }}>
              <NavbarMenu
              fontSize ={"1rem"}
            
                NavBarMenuArr={[
                  { icon: <CottageOutlinedIcon />, title: "جست و جوی همه " },
                ]}
              />
              <NavbarMenu
              fontSize ={"1rem"}
                NavBarMenuArr={[
                  { icon: <KingBedOutlinedIcon />, title: "هتل ها  " },
                ]}
              />
              <NavbarMenu
              fontSize ={"1rem"}
                NavBarMenuArr={[
                  {
                    icon: <CottageOutlinedIcon />,
                    title: "کارهایی برای انجام ",
                  },
                ]}
              />
              <NavbarMenu
              fontSize ={"1rem"}
                NavBarMenuArr={[
                  { icon: <RestaurantOutlinedIcon />, title: "رستوران ها " },
                ]}
              />
              <NavbarMenu
              fontSize ={"1rem"}
                NavBarMenuArr={[
                  { icon: <FlightTakeoffOutlinedIcon />, title: "پرواز ها " },
                ]}
              />
              <NavbarMenu
              fontSize ={"1rem"}
                NavBarMenuArr={[
                  {
                    icon: <HouseboatOutlinedIcon />,
                    title: " تعطبلات اجاره ها ",
                  },
                ]}
              />
            </List>
          </Box>
        </Box>
    
        </Grid>
        <Grid size ={{md  :  9}}>
        <Box sx={{marginTop :  "2rem"}}>
            <InpSearch isBtnSearch ={true}/>
           </Box>
        </Grid>
   
      </Grid>
      </Container>
    </Box>
  );
};

export default NavBarHome;
