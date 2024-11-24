import { FC } from "react";
import { ICardWhiteBottomProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const CardWhiteBottom: FC<ICardWhiteBottomProps> = ({
  coverImg,
  name,
  link,
}) => {
  const CusCardWhiteBottom = styled(Box)({
    paddingBottom: "1rem",
    ":hover": {
      opacity: 0.7,
      "& .titleCard": {
        borderBottom: "3px  solid #000",
      },
    },
  });
  return (
    <>
      <Link to={link}>
        <CusCardWhiteBottom sx={{ bgcolor: "#fff" }}>
          <img
            src={coverImg}
            alt=""
            style={{ height: "200px", width: "100%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              marginRight: "  1rem",
              marginTop: "1rem",
              display: "inline-block",
            }}
            className="titleCard"
          >
            {name}
          </Typography>
        </CusCardWhiteBottom>
      </Link>
    </>
  );
};

export default CardWhiteBottom;
