import { FC } from "react";
import { ICardRightSideImgProps } from "../../types/intefaces";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { CusCircleIcon } from "../../elements/CusComponets";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ReadMore from "../ReadMore/ReadMore";
import BadgeBoxes from "./BadgeBoxes";
import { Link } from "react-router-dom";
const CardRightSideImg: FC<ICardRightSideImgProps> = ({
  cover,
  disc,
  location,
  number,
  review,
  title,
  link,
  badgeDetails,
}) => {
  return (
    <Link to={link}>
      <Grid container margin={"1rem  0"} alignItems={"center"}>
        <Grid size={{ md: 5 }}>
          <Box height={"350px"} width={"100%"}>
            <img
              src={cover}
              alt=""
              className="rounded-md "
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ md: 7 }} padding={"2rem 3rem"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography sx={{ fontSize: "1.5rem" }}>{number}</Typography>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                {title}
              </Typography>
              <Button
                sx={{
                  bgcolor: "#fff",
                  border: "1px  solid #000",
                  padding: "0.5rem  1rem",
                  borderRadius: "2rem",
                }}
              >
                <FavoriteBorderOutlinedIcon />
                <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
                  ذخیره
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box display={"flex"} gap={1} padding={"0.75rem  0"}>
            <FmdGoodOutlinedIcon />
            <Typography>{location}</Typography>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Box display={"flex"}>
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
            </Box>
            <Typography sx={{ fontWeight: "light", fontSize: "0.90rem" }}>
              {review} بازدید
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} marginTop={"1rem"}>
            <AutoAwesomeIcon />
            <ReadMore lineShow={3} textBody={disc} />
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography sx={{ fontWeight: "bold", fontSize: "0.80rem" }}>
              مسافران بیشتر عاشق چی هستند؟
            </Typography>
            ‌
            <Box display={"flex"} gap={1}>
              {badgeDetails.map(({ icon, title }) => {
                return <BadgeBoxes icon={icon} text={title} bgColor= "#F2F1EC" />;
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Link>
  );
};

export default CardRightSideImg;
