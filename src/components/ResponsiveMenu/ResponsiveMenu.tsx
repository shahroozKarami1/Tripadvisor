import { Box, Container, Drawer, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const ResponsiveMenu = () => {
  let [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
  <Container >
        <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        padding: " 2rem   0",
        position :"sticky"  , 
        top :  10  , 
        bgcolor : '#fff' ,  
        
        zIndex : 999
      }}
    >
      <IconButton>
        <AccountCircleOutlinedIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <Link to={"/"}>
        <img
          src="/public/images/responsiveLogo/img.svg"
          width={"170px"}
          alt=""
        />
      </Link>

      <IconButton onClick={() => setIsOpenDrawer(true)}>
        <MenuOutlinedIcon   sx={{fontSize  : "2rem"}}/>
      </IconButton>
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
   <h1>hello </h1>
      </Drawer>
    </Box>
  </Container>
  );
};

export default ResponsiveMenu;
