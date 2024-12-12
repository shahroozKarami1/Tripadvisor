import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface CardAdviceProps {
  link: string;
  cover: string;
  text: string;
}

const CardAdvice: FC<CardAdviceProps> = ({ cover, link, text }) => {
  const CusCardAdvice = styled(Box)({
    borderRadius: "1rem",
    border: "1px  solid  #ccc",
  });
  return (
    <Link to={link}>
      <CusCardAdvice display={"flex"} alignItems={"center"}>
        <img src={cover} alt="" style={{ width: "80px" }} />
        <Typography sx={{ fontWeight: "bold" }}>{text}</Typography>
      </CusCardAdvice>
    </Link>
  );
};

export default CardAdvice;
