import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardRentalProps } from "../../types/intefaces";
import styled from "@emotion/styled";

const CardRental: FC<ICardRentalProps> = ({ TopCover, textBody }) => {
  const CusRentalCard = styled(Box)({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    border: "1px  solid #ccc",
    padding : "2rem" ,
    alignItems :"center" ,  
    justifyContent :'center'
  });
  return (
    <CusRentalCard>
      <Box   sx={{position :"absolute"  , top : "-30px"}} > 
        <img src={TopCover} alt=""  width={"50px"} />
      </Box>
      <Typography sx={{ textAlign: "center"  ,  fontSize : "0.90rem"}}>{textBody}</Typography>
    </CusRentalCard>
  );
};

export default CardRental;
