import { FC } from "react";
import { ICardSearchPageProps } from "../../types/intefaces";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CusSearchCard } from "../../elements/CusComponets";
import Grid from "@mui/material/Grid2";
import { useMedia } from "../../context/MediaQueryContext";
const CardSearchPage: FC<ICardSearchPageProps> = ({
  country,
  coverImg,
  disc,
  link,
  title,
}) => {
  const CusBoxDistination = styled(Box)({
    border: "1px  solid  #000",
    borderRadius: "0.5rem",
  });
  let  isXs  =  useMedia ()
  return (
    <Link to={link}>
      <CusSearchCard display={"flex"} alignItems={"center"}>
        <Grid container>
          <Grid size={{ md: 4 }}>
            <Box height={"270px"} width={ isXs  ?  "460px"  :"100%"}>
              <img
                src={coverImg}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                  borderTopRightRadius: "0.5rem",
                  borderBottomRightRadius: "0.5rem",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 8 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={3}
              sx={{ padding: "1rem" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={1}
                alignItems={"flex-start"}
              >
                <CusBoxDistination>
                  <Typography
                    sx={{
                      fontSize: "0.80rem",
                      fontWeight: "bold  ",
                      padding: 0.5,
                    }}
                  >
                    مقصد
                  </Typography>
                </CusBoxDistination>
                <Typography
                  className="titleHover"
                  sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                >
                  {title}
                </Typography>
                <Typography sx={{ color: "#444", fontSize: "0.80rem" }}>
                  {country}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ color: "#444", fontSize: "0.85rem", paddingY: "1rem" }}
                >
                  {disc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CusSearchCard>
    </Link>
  );
};

export default CardSearchPage;
