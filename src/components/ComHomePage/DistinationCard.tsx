import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IDistinationCardProps } from "../../types/intefaces";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
const DistinationCard: FC<IDistinationCardProps> = ({
  img,
  item,
  name,
  title,
}) => {
    const  CusIcon  =  styled (FavoriteOutlinedIcon) (
        {
            color : "red !important",
        }
    )
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <Link to={"/"}>
        <img src={img} alt="" className="rounded-lg  "  style={{height : "300px"}}  />
      </Link>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
      >
        <Link to={"/"}>
          <Typography sx={{fontSize :"0.80rem" ,  fontWeight: "bold"}}> توسط {name} </Typography>
        </Link>
        <Link to={"/"}>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {title}
          </Typography>
        </Link>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ marginTop: "1rem" }}
          gap={1}
        >
          <CusIcon  />
         <Typography sx={{color : `var( --gray-color)`}}>  {item}  آیتم </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DistinationCard;
