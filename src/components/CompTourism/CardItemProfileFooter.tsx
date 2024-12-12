import { FC } from "react";
import { ICardItemProfileFooterProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const CardItemProfileFooter: FC<ICardItemProfileFooterProps> = ({
  countOfIem,
  imgCover,
  profile,
  title,
  writer,
  link,
}) => {
  const CusCardItemProfileFooter = styled(Box)({
    margin: "0.5rem",
    direction: "rtl",
  });
  return (
    <Link to={link}>
      <CusCardItemProfileFooter>
        <img src={imgCover} alt="" style={{ borderRadius: "1rem" }} />
        <Box display={"flex"} flexDirection={"column"} marginTop={"1rem"} gap={1}>
          <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
            {title}
          </Typography>
          <Typography  sx={{color  :  "#444"  ,  fontSize : "0.85rem"}}> {countOfIem } آیتم </Typography>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <img src={profile} alt="" width={"35px"}  className="rounded-full"/>
            <Typography  fontSize={"0.80rem"}>{writer} توسط </Typography>
          </Box>
        </Box>
      </CusCardItemProfileFooter>
    </Link>
  );
};

export default CardItemProfileFooter;
