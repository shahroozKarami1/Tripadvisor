import { FC } from "react";
import { IAchievementBoxProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const AchievementBox: FC<IAchievementBoxProps> = ({
  href,
  subTitle,
  title,
}) => {
  return (
    <Link to={href}>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          border: "1px  solid  #ccc",
          borderRadius: "0.5rem",
          padding: "1rem  0",
        }}
      >
        <Box sx={{ margin: "0  1rem" }}>
          <LockOutlinedIcon
            sx={{
              "& path": {
                color: "#444",
              },
            }}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography fontSize={"0.80rem"} fontWeight={"light"} color="#444">
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default AchievementBox;
