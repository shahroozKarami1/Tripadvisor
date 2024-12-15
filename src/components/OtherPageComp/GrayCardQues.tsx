import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import ReadMore from "../ReadMore/ReadMore";

const GrayCardQues: FC<{ title: string; cardBody: string }> = ({
  cardBody,
  title,
}) => {
  const CusCard = styled(Box)({
    borderRadius: "1rem",
    backgroundColor: "#F2F2F2",
    padding  : "1rem" ,  
    margin : '0.5rem'  ,
    direction  : "rtl"
  });

  return (
    <CusCard>
      <Box padding={"0.5rem  0"}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
          {title}
        </Typography>
      </Box>
      <ReadMore lineShow={5}  textBody= {cardBody} />
    </CusCard>
  );
};

export default GrayCardQues;
