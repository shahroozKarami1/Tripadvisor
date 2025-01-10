import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
interface IGuideCardProps {
  cover: string;
  text: string;
  link: string;
  isVisitorNumber: boolean;
  visitorNumber?: number;
}

const GuideCard: FC<IGuideCardProps> = ({
  cover,
  link,
  text,
  isVisitorNumber,
  visitorNumber,
}) => {
  return (
    <Link to={link}>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        sx={{ marginY: "1.2rem" }}
      >
        <Box sx={{ width: "100px", height: "70px" }}>
          <img
            src={cover}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              borderRadius: "0.75rem",
            }}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography sx={{ fontSize: "0.90rem" }}>{text}</Typography>
          {isVisitorNumber && (
            <Box display={"flex"} alignItems={"center"} marginTop={"0.25rem"}>
              <LocalFireDepartmentOutlinedIcon
                sx={{ "& path": { color: "#7D0F00" } }}
              />
              <Typography sx={{ fontSize: "0.90rem", color: "#7D0F00" }}>
                {visitorNumber}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Link>
  );
};

export default GuideCard;
