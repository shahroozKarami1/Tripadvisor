import React, { FC } from "react";
import { ICardSliderReadMore } from "../../types/intefaces";
import { Box, IconButton, Typography } from "@mui/material";
import { CusCircleIcon } from "../../elements/CusComponets";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Slider from "react-slick";
import Grid from "@mui/material/Grid2";
import ReadMore from "../ReadMore/ReadMore";

const CategoryBox: FC<{ text: string; icon: React.ReactNode }> = ({
  icon,
  text,
}) => {
  return (
    <Box display={"flex"}    alignItems={"center"}  marginBottom={"1.5rem"}>
      <IconButton sx={{"& svg  path" :  {color :  "#444" } ,    "& svg"  :  {
          fontSize : "1.2rem"
        }  ,  padding : "0.25rem"}}>{icon}</IconButton>
        <Typography  sx={{fontSize :"0.80rem" ,  color : "#444"}}>{text}</Typography>
    </Box>
  );
};

const CardOfSlider: FC<{ coverImg: string }> = ({ coverImg }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: "1rem",
      }}
    >
      <img
        src={coverImg}
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          borderRadius: "1rem",
        }}
      />
      <Box sx={{ position: "absolute", top: 20, right: 20 }}>
        <FavoriteBorderOutlinedIcon
          sx={{
            bgcolor: "#fff",
            cursor: "pointer",
            borderRadius: "50%",
            fontSize: "2rem",
            padding: "0.25rem",
          }}
        />
      </Box>
    </Box>
  );
};

const CardSliderReadMore: FC<ICardSliderReadMore> = ({
  countOfLike,
  imgCover,
  titeCard,
  comment,
  isComment,
  textBodyCard,
  category,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ marginBottom: "3rem " }}>
      <Grid container alignItems={"flex-start"} spacing={3}>
        <Grid size={{ md: 3.6 }}>
          <Slider {...settings}>
            {imgCover.map((src) => {
              return <CardOfSlider coverImg={src} />;
            })}
          </Slider>
        </Grid>
        <Grid size={{ md: 8 }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                paddingBottom: "1rem",
              }}
            >
              {titeCard}
            </Typography>
            <Box>
              <Box
                display={"flex"}
                gap={1}
                alignItems={"center"}
                margin={"0.25rem  0"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <CusCircleIcon />
                  <CusCircleIcon />
                  <CusCircleIcon />
                  <CusCircleIcon />
                  <CusCircleIcon />
                </Box>
                <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                  {countOfLike}
                </Typography>
              </Box>
      <Box display={"flex"}  gap={1} alignItems={"center"}>
      {
                category.map (({icon ,  text})  => {
                    return (
                        <CategoryBox icon ={icon}  text ={text} />
                    )
                })
              }
      </Box>
            </Box>
            <ReadMore
              fontSizeCus="0.85rem"
              lineShow={2}
              textBody={textBodyCard}
            />
            {isComment && (
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                gap={1}
                marginTop={"1rem"}
                marginRight={"0.75rem"}
                borderTop={"1px solid #ccc"}
                paddingTop={"0.5rem"}
              >
                <img
                  src={comment?.profile}
                  style={{ width: "30px", borderRadius: "50%" }}
                  alt=""
                />
                <ReadMore
                  fontSizeCus="0.75rem"
                  lineShow={3}
                  textBody={`${comment?.name} : ${comment?.textComment}`}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardSliderReadMore;
