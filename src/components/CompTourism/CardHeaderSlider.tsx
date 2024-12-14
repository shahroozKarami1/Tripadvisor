import { FC } from "react";
import { ICardHeaderSliderProps } from "../../types/intefaces";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import {
  CusCircleIcon,
  CusCircleOutLine,
  DarkOverlay,
} from "../../elements/CusComponets";
import FadeSlider from "../CompTravelerChoiceHotel/FadeSlider";
import { Link } from "react-router-dom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ToolTipCustom from "../ToolTipCustom/ToolTipCustom";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
const CardHeaderSlider: FC<ICardHeaderSliderProps> = ({
  conutOfLike,
  footerCard,
  link,
  cover,
  title,
  CountOfExperience,
  TextExtraDisc,
  isExtraDisc,
  isYellowSeeWay,
}) => {
  const CusCardHeaderSliderWrapper = styled(Box)({
    position: "relative",
    margin: " 0.5rem",
    direction: "rtl",
    border: "1px  solid  #ccc",
    borderRadius: "1rem",
  });
  const CusLikeIcon = styled(Box)({
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: "1rem",
    padding: "0.25rem",
  });
  return (
    <Link to={link}>
      <CusCardHeaderSliderWrapper>
        <FadeSlider>
          {cover.map(({ id, imgSrc }) => {
            return (
              <Box key={id} height={"300px"}>
                <DarkOverlay />

                <img
                  src={imgSrc}
                  alt=""
                  className="rounded-lg   w-full  h-full  object-cover object-center  "
                />
                <CusLikeIcon>
                  <FavoriteBorderOutlinedIcon />
                </CusLikeIcon>
              </Box>
            );
          })}
        </FadeSlider>
        <Box
          marginTop={"1rem"}
          padding={"0.5rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {title}
          </Typography>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Box display={"flex"}>
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleOutLine />
            </Box>
            <Typography sx={{ color: "#444", fontSize: "0.80rem" }}>
              {conutOfLike}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
            {footerCard}
          </Typography>

          {isExtraDisc && (
            <Box
              display={"flex"}
              sx={{
                padding: "  1rem   0.5rem ",
                borderTop: "1px  solid  #ccc",
              }}
            >
              <Typography
                sx={{ fontSize: "0.80rem", color: "#000", lineHeight: 2 }}
              >
                <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />

                {TextExtraDisc}
                <ToolTipCustom
                  icon={<ReportGmailerrorredIcon/>}
                  text="این توصیف جاذبه توسط هوش مصنوعی و با استفاده از اطلاعات و عباراتی که معمولاً در نظراتی که کاربران به Tripadvisor ارسال می‌کنند یافت می‌شود. Tripadvisor این توضیحات را ایجاد نکرده و مسئولیتی در قبال آن ندارد. لطفاً نظرات کامل مسافران را برای جزئیات و اطلاعات بیشتر بخوانید. اگر فکر می‌کنید چیزی در این توضیحات ایجاد شده توسط هوش مصنوعی نادرست است، لطفاً بازخورد خود را به اشتراک بگذارید."
                />
              </Typography>
            </Box>
          )}
        </Box>
        {isYellowSeeWay && (
          <Box
            sx={{
              bgcolor: `#FFF7E1`,
              padding: "1rem  0",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              sx={{
                color: "#000",
                fontWeight: "bold",
                fontSize: "0.80rem",
                borderBottom: "1px  solid   #000",
                padding: 0,
                borderRadius: 0,
              }}
            >
              راه های تجربه را ببینید ({CountOfExperience})
            </Button>
          </Box>
        )}
      </CusCardHeaderSliderWrapper>
    </Link>
  );
};

export default CardHeaderSlider;
