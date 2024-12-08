import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardNearByProps } from "../../types/intefaces";
import { CusCircleIcon } from "../../elements/CusComponets";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from "@emotion/styled";
const CardNearBy: FC<ICardNearByProps> = ({
  countOfLike,
  coverCard,
  linkCard,
  mileAway,
  titleCard,
}) => {

    const  CusLikeIcon  =   styled(FavoriteBorderIcon)  ({
      backgroundColor  : "#fff"  ,
      borderRadius : '50%'  ,  
      padding : "0.20rem" ,
      cursor : "pointer"
    })
  return (
    <Link to={linkCard}>
      <Box display={"flex"} gap={2} sx={{ margin: "1.5rem 0"  ,  position : 'relative'}} >
        <Box >
          <img
            src={coverCard}
            alt=""
            style={{ width: "120px", borderRadius: "1rem" }}
          />
         <Box  sx ={{ position  : "absolute"  ,  top : 10 ,  right : 10}}>
                <CusLikeIcon/>
            </Box> 
    
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
            {titleCard}
          </Typography>
          <Box display={"flex"} gap={1} padding={"0.5rem  0"}>
            <Box display={"flex"} alignItems={"center"}>
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
            </Box>
            <Typography  sx={{ fontSize: "0.80rem" }}>{countOfLike}</Typography>
          </Box>
          <Typography sx={{ fontSize: "0.80rem" }}>
            {mileAway} مایل دورتر
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default CardNearBy;
