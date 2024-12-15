import { FC } from "react";
import { ICardThreeImgsProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { DarkOverlay } from "../../elements/CusComponets";

const CardThreeImgs: FC<ICardThreeImgsProps> = ({
  imgUrls,
  link,
  mileNumber,
  titleOfMainCard,
}) => {
  return (
    <Link to={link}>
      <Box
        sx={{
          position: "relative",
          margin: "   0.5rem ",
        }}
      >
        <Box sx={{ position: "absolute", top: 20, right: 20 }}>
          <FavoriteBorderOutlinedIcon
            sx={{
              bgcolor: "#fff",
              borderRadius: "50%",
              fontSize: "2rem",
              padding: "0.25rem",
            }}
          />
        </Box>
        <Grid container spacing={0.5}>
          <Grid size={{ md: 8 }}>
            <Box sx={{ position: "relative", height: "100%" }}>
              <img
                src={imgUrls.mainImg}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  height: "100%",
                  borderTopLeftRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              />
              <DarkOverlay />
              <Box sx={{ position: "absolute", bottom: 20, right: 20 }}>
                <Box display={"flex"} flexDirection={"column"} gap={1}>
                  <Typography
                    sx={{
                      fontSize: "1.7rem",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    {titleOfMainCard}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.80rem",
                      color: "#fff",
                      fontWeight: "bold",
                      textAlign: "end",
                    }}
                  >
                    کیلومتر {mileNumber}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ md: 4 }}>
            {imgUrls.otherImgs.map((imgSrc) => {
              return (
                <Box>
                  <img
                    src={imgSrc}
                    alt=""
                    style={{
                      borderTopRightRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  />
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

export default CardThreeImgs;
