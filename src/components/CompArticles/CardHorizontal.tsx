import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const CardHorizontal: FC<{ text: string; coverCard: string; link: string }> = ({
  text,
  coverCard,
  link,
}) => {
  return (
    <Link to={link}>
      <Box display={"flex"} gap={1} alignItems={"flex-start"}>
        <img src={coverCard} alt="" width={"150px"} className="rounded-lg  " />
        <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
          {text}
        </Typography>
      </Box>
    </Link>
  );
};

export default CardHorizontal;
