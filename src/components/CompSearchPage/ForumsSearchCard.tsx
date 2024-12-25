import { FC } from "react";
import { IForumsSearchCardProps } from "../../types/intefaces";
import { Box, styled, Typography } from "@mui/material";

const ForumsSearchCard: FC<IForumsSearchCardProps> = ({
  date,
  disc,
  name,
  nameOfForum,
  profile,
  title,
}) => {
  const CusWrapperBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "1.2rem",
    borderRadius: "0.5rem",
    margin: "0.75rem  ",
    boxShadow: "var(--main-shadow)",
    gap: 5,
  });
  return (
    <CusWrapperBox>
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>

      <Box display={"flex"} alignItems={"center"} gap={1}>
        <img
          src={profile}
          alt=""
          style={{ width: "50px", borderRadius: "50%",  height : "50px" }}
        />
        <Box display={"flex"} gap={1}>
          <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
            توسط {name}
          </Typography>
          <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
            {date}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontSize: "0.90rem", paddingY: " 0.5rem" }}>
        از انجمن: {nameOfForum}
      </Typography>
      <Box marginTop={"1rem"}>
        <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
          {disc}
        </Typography>
      </Box>
    </CusWrapperBox>
  );
};

export default ForumsSearchCard;
