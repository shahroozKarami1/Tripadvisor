import { Box, Button, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";
import { ReviewBoxProps } from "../../types/intefaces";
import { CusCircleIcon, CusCircleOutLine } from "../../elements/CusComponets";
// import ReadMore from "../ReadMore/ReadMore";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Grid from "@mui/material/Grid2";
const RatingReview: FC<{ reviewTopic: string; likeScore?: number }> = ({
  reviewTopic,
}) => {
  return (
    <Box display={"flex"} gap={1} alignItems={"center"} marginBottom={"1rem"}>
      <Typography sx={{ fontSize: "0.80rem" }}>{reviewTopic}</Typography>

      <Box display={"flex"} alignItems={"center"}>
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleOutLine />
        <CusCircleOutLine />
        <CusCircleOutLine />
      </Box>
    </Box>
  );
};

const ReviewBox: FC<ReviewBoxProps> = ({
  countContributions,
  date,
  likeCount,
  name,
  profile,
  reviewBody,
  title,
  typeOfFamilly,
}) => {
  let [isExpended, setIsExpended] = useState<boolean>(false);
  const toggleReadMore = () => {
    setIsExpended(!isExpended);
  };
  return (
    <Box
      sx={{ padding: "1rem", borderTop: "2px  solid  #ccc", marginTop: "1rem" }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <img
            src={profile}
            alt=""
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          />
          <Box display={"flex"} flexDirection={"column"}>
            <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
            <Typography sx={{ fontSize: "0.70rem" }}>
              <span>{countContributions}</span> مشارکت
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
          <Box display={"flex"} alignItems={"center"}>
            <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
              {likeCount}
            </Typography>
            <IconButton>
              <ThumbUpOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} marginTop={"1.3rem"}>
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleOutLine />
        <CusCircleOutLine />
        <CusCircleOutLine />
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography sx={{ fontWeight: "bold", padding: "0.25rem  0" }}>
          {title}
        </Typography>
        <Typography sx={{ fontWeight: "light", paddingBottom: "0.5rem" }}>
          {date} . {typeOfFamilly}
        </Typography>
      </Box>
      {/* <ReadMore lineShow={3} textBody={reviewBody} /> */}
      <Box>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: isExpended ? "none" : 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "0.90rem",
            textAlign: "right",
          }}
        >
          {reviewBody}
        </Typography>
        {reviewBody.split(" ").length > 50 && (
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button
              sx={{
                color: "#000",
                fontWeight: "bold",
                borderBottom: "1px  solid #000",
                fontSize: "0.80rem",
              }}
              variant="text"
              onClick={toggleReadMore}
            >
              {isExpended ? "نمایش کمتر" : "نمایش بیشتر"}{" "}
            </Button>
          </Box>
        )}

        {isExpended && (
          <Grid container alignItems={"center"}>
            <Grid size={{ md: 6, xs: 12 }}>
              <RatingReview reviewTopic="سرویس" />
              <RatingReview reviewTopic="فضا" />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <RatingReview reviewTopic="ارزش" />
              <RatingReview reviewTopic="غذا" />
            </Grid>
          </Grid>
        )}
      </Box>
      <Box  display={"flex"}  flexDirection={"column"}  gap={1}>
        <Typography  sx={{fontSize : "0.70rem" ,  marginTop :"0.75rem"}}>نوشته شده در 29 ژوئن 2024</Typography>
      <Typography sx={{fontSize : "0.70rem" }}>
        این بررسی نظر ذهنی یکی از اعضای Tripadvisor است نه نظر Tripadvisor LLC.
        Tripadvisor بررسی بررسی ها را به عنوان بخشی از ما انجام می دهد
        استانداردهای اعتماد و ایمنی پیشرو در صنعت گزارش شفافیت ما را بخوانید
        برای یادگیری بیشتر
      </Typography>
      </Box>
    </Box>
  );
};

export default ReviewBox;
