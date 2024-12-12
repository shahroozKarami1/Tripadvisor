import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
interface CardSliderProps {
  link: string;
  cover: string;
}
const CardSlider: FC<CardSliderProps> = ({ cover, link }) => {
  const CusCountPhoto = styled(Box)({
    backgroundColor: "var(--dark-color)",
    color: "#fff",
    borderRadius: "2rem",
    position: "absolute",
    bottom: 10,
    right: 10,
    display :"flex" ,  
    padding : "0.5rem" ,
    alignItems: "center" , 
    gap :  5
  });
  return (
    <Link to={link}>
      <Box sx={{ position: "relative" }}>
        <img src={cover} alt=""   className="rounded-lg" />
        <CusCountPhoto>
          <PhotoSizeSelectActualOutlinedIcon sx={{"path" : {
            color  : "#fff"
          }}}  />
          <Typography sx={{color : "#fff" ,  fontSize : "0.70rem" ,  fontWeight : "bold"}} >2,250,000</Typography>
        </CusCountPhoto>
      </Box>
    </Link>
  );
};

export default CardSlider;
