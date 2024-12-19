import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardForFirstTripProps } from "../../types/intefaces";

const CardForFirstTrip: FC<ICardForFirstTripProps> = ({
  countryName,
  coverImg,
  titleImg,
  changePageHandler
}) => {
  return (
    <Box sx={{margin : ' 0  0.5rem' , cursor :  "pointer"}}  onClick={changePageHandler}>
      <Box  height={"120px"}  >
        <img
          src={coverImg}
          alt=""
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height : '100%' ,  
            width  : "100%"  ,  
            borderRadius: "0.5rem",
          }}
        />
      </Box  >
  <Box  mt={"0.5rem"}>
  <Typography sx={{ fontWeight: "bold"  }}>{titleImg}</Typography>
  <Typography sx={{ color: "#444" ,  fontSize : "0.80rem" }}>{countryName}</Typography>
  </Box>
    </Box>
  );
};

export default CardForFirstTrip;
