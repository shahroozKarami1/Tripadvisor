import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import UserScoreBox from "../../components/CompProfile/UserScoreBox";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState } from "react";
import { useMedia } from "../../context/MediaQueryContext";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import DarkBtn from "../../components/DarkBtn/DarkBtn";
import AchievementBox from "../../components/CompProfile/AchievementBox";
import { Link } from "react-router-dom";
import LocalSeeOutlinedIcon from "@mui/icons-material/LocalSeeOutlined";
import UpLoadFile from "../../components/UploadFile/UpLoadFile";
import IntroBtn from "../../components/CompProfile/IntroBtn";
import CardOfTabs from "../../components/CompProfile/CardOfTabs";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isXs = useMedia();
  return (
    <Box sx={{ backgroundColor: "#F2F2F2" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ backgroundColor: "#E0E0E0", padding: "5rem 0" }}
      >
        <UpLoadFile />
      </Box>
      <Container sx={{ position: "relative", top: "-45px" }}>
        <Grid container>
          <Grid size={{ md: 12 }}>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: "0.25rem",
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                flexDirection={isXs ? "column-reverse" : "row"}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  sx={{ padding: "2rem" }}
                >
                  {!isXs && (
                    <Box width={"120px"}>
                      <img
                        src="/public/images/NextTrip/img7.jpg"
                        alt=""
                        style={{
                          objectFit: "cover",
                          borderRadius: "50%",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </Box>
                  )}
                  <Box display={"flex"} flexDirection={"column"} gap={2}>
                    {isXs && (
                      <Box width={"80px"}>
                        <img
                          src="/public/images/NextTrip/img7.jpg"
                          alt=""
                          style={{
                            objectFit: "cover",
                            borderRadius: "50%",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </Box>
                    )}
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{ fontSize: "1.4rem", fontWeight: "bold" }}
                      >
                        شهروز کرمی
                      </Typography>
                      <Typography sx={{ color: "#444", fontSize: "1em" }}>
                        shahrooz2020
                      </Typography>
                    </Box>

                    <Box display={"flex"} alignItems={"center"}>
                      <UserScoreBox number={20} titleOfScore="مشارکت ها" />
                      <UserScoreBox
                        number={55}
                        titleOfScore=" دنبال کننده ها"
                      />
                      <UserScoreBox
                        number={10}
                        titleOfScore="دنبال شونده  ها"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{
                    border: "1px  solid  #ccc",
                    borderRadius: "0.20rem",
                    marginLeft: "2rem",
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    sx={{
                      fontWeight: "bold",
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    ویرایش پروفایل
                  </Button>
                  <IconButton
                    sx={{ borderRight: "1px  solid  #ccc", borderRadius: 0 }}
                  >
                    <SettingsOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                  </IconButton>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                      "& .css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected":
                        {
                          fontWeight: "bold",
                          color: "#000",
                          borderBottom: "var(--primary-color)",
                        },
                      "& .css-1qltlow-MuiTabs-indicator": {
                        bgcolor: `var(--primary-color)`,
                      },
                    }}
                    aria-label="basic tabs example"
                  >
                    <Tab label="فعالیت ها" {...a11yProps(0)} />
                    <Tab label="سفر ها" {...a11yProps(1)} />
                    <Tab label="تصاویر" {...a11yProps(2)} />
                    <Tab label="بررسی ها" {...a11yProps(3)} />
                    <Tab label="انجمن ها" {...a11yProps(4)} />
                    {!isXs && <Tab label="نقشه سفر" {...a11yProps(5)} />}
                  </Tabs>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop={"1.5rem"} spacing={3}>
          <Grid size={{ md: 3.5, xs: 12 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{ bgcolor: "#fff", padding: "1rem" }}
            >
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  دستاورد های شما
                </Typography>
                <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                  برای باز کردن قفل اشتراک گذاری را شروع کنید
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                marginY={"1rem"}
                gap={2}
              >
                <AchievementBox
                  href="/UserReview"
                  subTitle="نقاط عطف بررسی را باز کنید"
                  title="اولین نظر خود را بنویسید"
                />
                <AchievementBox
                  href="/PostPhotos"
                  subTitle="اولین عکس خود را آپلود کنید"
                  title="نقاط عطف عکس را باز کنید"
                />
              </Box>
              <DarkBtn> دیدن همه </DarkBtn>
            </Box>
            <Box
              sx={{ bgcolor: "#fff", padding: "1rem", marginTop: "1rem" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
                معرفی
              </Typography>

              <List>
                <IntroBtn
                  Type="plus"
                  setState=""
                  text="شهر فعلی خود را اضافه کنید"
                />
                <IntroBtn
                  Type="date"
                  setState=""
                  text="در مهر 1402 پیوسته ایید"
                />
                <IntroBtn
                  Type="plus"
                  setState=""
                  text="یک وب سایت اضافه کنید"
                />
                <IntroBtn
                  Type="plus"
                  setState=""
                  text="جزئیاتی در مورد خودتان بنویسید"
                />
              </List>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{ bgcolor: "#fff", padding: "1rem", marginTop: "1.5rem" }}
            >
              <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
                توصیه سفر خود را به اشتراک بگذارید
              </Typography>
              ‌
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Link to={"/PostPhotos"}>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <LocalSeeOutlinedIcon />
                    <Typography
                      sx={{ fontWeight: "light", fontSize: "0.90rem" }}
                    >
                      ارسال تصاویر
                    </Typography>
                  </Box>
                </Link>
                <Link to={"/UserReview"}>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <RateReviewOutlinedIcon />
                    <Typography
                      sx={{ fontWeight: "light", fontSize: "0.90rem" }}
                    >
                      نوشتن بررسی
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ md: 8.5 }}>
            <Grid container>
              <Grid size={{ md: 8 }}>
                <CustomTabPanel index={0} value={value}>
                  <CardOfTabs
                    isLink={false}
                    textBody="عکس ها و اطلاعات را به نمایه خود اضافه کنید تا مردم بتوانند شما را به راحتی پیدا کنند و شما را بهتر بشناسند!"
                    title="نمایه خود را پر کنید"
                  />
                </CustomTabPanel>
                <CustomTabPanel index={1} value={value}>
                  <CardOfTabs
                    isLink={true}
                    LinkObj={{
                      textLink: "سفر ایجاد کنید",
                      urlLink: "/Trips",
                    }}
                    textBody={`فهرست آرزوها را بسازید، توصیه‌ها را به اشتراک بگذارید و برنامه‌های سفر را با سفرها سازماندهی کنید!`}
                    title="اولین سفر خود را ایجاد کنید!"
                  />
                </CustomTabPanel>
                <CustomTabPanel index={2} value={value}>
                  <CardOfTabs
                    isLink={true}
                    LinkObj={{
                      textLink: "عکس را ارسال کنید",
                      urlLink: "/PostPhotos",
                    }}
                    textBody={`به مسافران دیگر کمک کنید آنچه را که دیده‌اید ببینند — تا بدانند چه چیزی را در انتظارشان هستند!`}
                    title="اولین عکس خود را ارسال کنید"
                  />
                </CustomTabPanel>
                <CustomTabPanel index={3} value={value}>
                  <CardOfTabs
                    isLink={true}
                    LinkObj={{
                      textLink: "نظر خود را بنویسید",
                      urlLink: "/UserReview",
                    }}
                    textBody={`نظر شما مهم است! مرور هتل‌ها، کارهایی که باید انجام دهید و موارد دیگر را در Tripadvisor شروع کنید`}
                    title="اولین نظر خود را بنویسید!"
                  />
                </CustomTabPanel>
                <CustomTabPanel index={4} value={value}>
                  <CardOfTabs
                    isLink={false}
           
                    textBody={`سایر مسافران آماده کمک - و به اشتراک گذاشتن مشاوره و ایده هستند`}
                    title="سوالی دارید؟ از انجمن های ما بپرسید!"
                  />
                </CustomTabPanel>
              </Grid>
              <Grid size={{ md: 4 }}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
