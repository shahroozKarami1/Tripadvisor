import { Box, styled, Typography } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IServicesCardProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}
const CusServicesCardBox = styled(Box)({
  transition: "all 0.25s ease",
  padding: "0.5rem  0",
  ":hover": {
    backgroundColor: "var(--primary-color)",
  },
});

const StyledIconBox = styled(Box)({
  fontSize: "1.5rem",
  path: {
    color: "#444",
  },
});
const ServicesCard: FC<IServicesCardProps> = ({ icon, link, text }) => {
  return (
    <Link to={link}>
      <CusServicesCardBox display={"flex"} alignItems={"center"} gap={1}>
        <StyledIconBox>{icon}</StyledIconBox>
        <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>
          {text}
        </Typography>
      </CusServicesCardBox>
    </Link>
  );
};

export default ServicesCard;
