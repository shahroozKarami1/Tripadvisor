import { FC, useState } from "react";
import { IMainCardDetailsProps } from "../../types/intefaces";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SimpleSlider from "../SliderWithOutContainer/SimpleSlider";
import { Link } from "react-router-dom";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import YellowBtn from "../CompArticleDetails/YellowBtn";
import CheckInOut from "../DataPicker/CheckInOut";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreDetailsSectionCard from "./MoreDetailsSectionCard";
const CardDetails: FC<{
  icon?: React.ReactNode;
  text?: string;
  isLink: boolean;
}> = ({ icon, isLink, text }) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      {isLink ? (
        <Link to={"/"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            marginY={"0.25rem"}
          >
            <FmdGoodOutlinedIcon />
            <Typography
              sx={{
                color: "#444",
                fontSize: "0.90rem",
                borderBottom: "1px solid  #444",
              }}
            >
              دیدن روی نقشه
            </Typography>
          </Box>
        </Link>
      ) : (
        <Box display={"flex"} alignItems={"center"} gap={1} marginY={"0.25rem"}>
          <Typography>{icon}</Typography>
          <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
const MainCardDetails: FC<IMainCardDetailsProps> = ({
  cardSliderImgs,
  countOfBathroom,
  countOfBedroom,
  countOfSleeps,
  title,
  moreInformation,
}) => {
  const [isShowDetails, setIsShowDetails] = useState(false);

  const handleClickForMoreDetails = () => {
    setIsShowDetails((prev) => !prev); // تغییر وضعیت چرخش
  };
  return (
    <Box
      sx={{
        marginY: "2rem",
        borderBottom: "1px  solid  #ccc",
        paddingY: "2rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ md: 4 }}>
          <SimpleSlider countOfSlider={1}>
            {cardSliderImgs.map((src) => {
              return (
                <Box height={"200px"} width={"100%"}>
                  <img
                    src={src}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Box>
              );
            })}
          </SimpleSlider>
        </Grid>
        <Grid size={{ md: 8 }}>
          <Box>
            <Link to={"/"}>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                {title}
              </Typography>
            </Link>
          </Box>
          <Grid container spacing={3}>
            <Grid size={{ md: 6 }}>
              <Box display={"flex"} flexDirection={"column"}>
                <CardDetails isLink={true} />

                <CardDetails
                  isLink={false}
                  icon={<BedOutlinedIcon />}
                  text={`${countOfBedroom} اتاق  خواب`}
                />
                <CardDetails
                  isLink={false}
                  icon={<PeopleAltOutlinedIcon />}
                  text={`${countOfSleeps}  خوابه`}
                />
                <CardDetails
                  isLink={false}
                  icon={<BathtubOutlinedIcon />}
                  text={`${countOfBathroom}  حمام`}
                />

                <CardDetails
                  isLink={false}
                  icon={
                    <CheckCircleIcon
                      sx={{ "& path": { color: "var(--primary-color)" } }}
                    />
                  }
                  text={`مطابقت : خواب ها `}
                />

                <Box>
                  <Button
                    sx={{ padding: 0, margin: 0 }}
                    onClick={handleClickForMoreDetails}
                  >
                    <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>
                      خواندن جزییات بیشتر
                    </Typography>
                    <KeyboardArrowDownIcon
                      sx={{
                        transition: "transform 0.3s ease",
                        transform: isShowDetails
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Box display={"flex"} flexDirection={"column"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                  sx={{ paddingY: "1rem" }}
                >
                  <CheckInOut label="تاریخ پذیرش شدن" />
                  <CheckInOut label="تاریخ  تحویل دادن" />
                </Box>
                <YellowBtn link="/" text="نشان دادن قیمت  ها" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
            {isShowDetails && (
              <Grid size={{ md: 12 }}>
                <MoreDetailsSectionCard
                  AboutProperty={moreInformation.AboutProperty}
                  allowed={{
                    kid: moreInformation.allowed.kid,
                    pet: moreInformation.allowed.pet,
                    smoking: moreInformation.allowed.smoking,
                  }}
                  items={moreInformation.items}
                />
              </Grid>
            )}
      </Grid>
    </Box>
  );
};

export default MainCardDetails;
