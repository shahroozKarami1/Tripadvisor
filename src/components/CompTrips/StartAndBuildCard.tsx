import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { CusStartAndBuildCardTrip } from "../../elements/CusComponets";
import { IStartAndBuildCardProps } from "../../types/intefaces";
import styled from "@emotion/styled";

const StartAndBuildCard: FC<IStartAndBuildCardProps> = ({
  colorBack,
  colorBtn,
  cover,
  disc,
  textBtn,
  title,
}) => {
  const CusBtn = styled(Button)({
    color: "#000",
    fontWeight: "bold",
    borderRadius: "2rem",
    color: colorBtn.colorText ? colorBtn.colorText : `var(--dark-color)`,
    marginTop : "1.5rem" , 
    padding : "1rem" ,  
    fontSize : "0.80rem"
  });
  return (
    <CusStartAndBuildCardTrip sx={{ bgcolor: colorBack }}>
      <img
        src={cover}
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "300px",
        }}
      />
      <Box sx={{ width: "300px" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.5rem", padding: "1.2rem  0" , marginTop : "0.5rem"}}
        >
          {title}
        </Typography>
        <Typography>{disc}</Typography>
        <CusBtn sx={{ bgcolor: colorBtn.colorBack }}>{textBtn}</CusBtn>
      </Box>
    </CusStartAndBuildCardTrip>
  );
};

export default StartAndBuildCard;
