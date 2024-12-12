import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const CardCenterTextFooter: FC<{
  link: string;
  img: string;
  textFooter: string;
}> = ({ img, link, textFooter }) => {
  const CusBoxWrapper = styled(Box)({
    position: "relative",
    width: "100%",
    padding: "0  0.5rem  ",
    height: "250px",
  });
  const CusText = styled(Typography)({
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "0.90rem",
  });
  return (
    <Link to={link}>
      <CusBoxWrapper>
        <Box sx={{ position: "absolute", top: 10, right: 20 }}>
          <FavoriteBorderOutlinedIcon
            sx={{
              bgcolor: "#fff",
              borderRadius: "50%",
              fontSize: "2rem",
              padding: "0.25rem",
            }}
          />
        </Box>
        <img
          src={img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "1rem",
          }}
        />
      </CusBoxWrapper>
      <Box sx={{ padding: " 0.5rem  1.5rem ", marginTop: "0.5rem" }}>
        <CusText>{textFooter}</CusText>
      </Box>
    </Link>
  );
};

export default CardCenterTextFooter;
