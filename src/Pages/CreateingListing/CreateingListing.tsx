import {
  Box,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { FC, useState } from "react";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { Link } from "react-router-dom";
import InpsForAdd from "../../components/CompCreateListing/InpsForAdd";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DarkBtn from "../../components/DarkBtn/DarkBtn";
type TCatContentBtn = "thingsToDo" | "restaurant" | "accommodation";
const MainTPText: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      ‌<Typography sx={{ fontWeight: "bold" }}> {text} </Typography>‌
    </>
  );
};

const BtnCategory: FC<{
  text: string;
  icon: React.ReactNode;
  clickHander: () => void;
}> = ({ text, icon, clickHander }) => {
  return (
    <Button
      onClick={clickHander}
      sx={{
        border: "1px  solid  #ccc",
        padding: "0.5rem  2rem",
        borderRadius: "2rem",
      }}
    >
      <Typography>{icon}</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: "0.80rem" }}>
        {text}
      </Typography>
    </Button>
  );
};
const CreateingListing = () => {
  let [activeBtnCat, setActiveBtnCat] = useState<TCatContentBtn | null>(
    "thingsToDo"
  );
  let [isOpenNewAddressBox, setIsOpenNewAddressBox] = useState(false);
  let [IsOpenInpsAddress, setIsOpenInpsAddress] = useState(false);
  let [isRepresentative, setIsRepresentative] = useState(false);
  let listOfContentCat = {
    thingsToDo: <h1>1</h1>,
    restaurant: <h1>2</h1>,
    accommodation: <h1>3</h1>,
  };
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid size={{ md: 7 }}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                یک مکان اضافه کنید
              </Typography>
              ‌
              <Box display={"flex"} gap={2} margin={"1rem  0"}>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      bgcolor: `var(--dark-color) `,
                      color: "#fff",
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                    }}
                  >
                    1
                  </Typography>
                  <MainTPText text="جزییات موقعیت" />
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#E0E0E0",
                      color: "#000",
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                    }}
                  >
                    2
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    تماس و ساعت کاری{" "}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  paddingTop: "1rem ",
                  fontSize: "1.2rem",
                }}
              >
                جزییات موقعیت
              </Typography>
              ‌<MainTPText text="اسم" />
              <TextField id="outlined-basic" placeholder="اسم موقعیت " />
              <Box display={"flex"} flexDirection={"column"}></Box>
            </Box>

            <Box>
              <MainTPText text="کدام دسته این مکان را بهتر توصیف می کند؟" />
              <Box display={"flex"} gap={2}>
                <BtnCategory
                  clickHander={() => setActiveBtnCat("thingsToDo")}
                  icon={<LocalActivityOutlinedIcon />}
                  text="کارهایی  برای انجام"
                />
                <BtnCategory
                  clickHander={() => setActiveBtnCat("restaurant")}
                  icon={<RestaurantMenuOutlinedIcon />}
                  text="رستوران"
                />
                <BtnCategory
                  clickHander={() => setActiveBtnCat("accommodation")}
                  icon={<KingBedOutlinedIcon />}
                  text="اسکان"
                />
              </Box>
              <Box>{activeBtnCat && listOfContentCat[activeBtnCat]}</Box>

              <Box>
                <Box
                  sx={{
                    border: "1px  solid  #ccc",
                    borderRadius: "0.75rem",
                    padding: "1.5rem",
                    marginTop: "2rem",
                  }}
                >
                  <MainTPText text="چیز دیگری اضافه کردی؟" />
                  <Grid container>
                    <Grid size={{ md: 6 }}>
                      <Box display={"flex"} gap={1} alignItems={"center"}>
                        <ConfirmationNumberOutlinedIcon />
                        <Link to={"/"}>
                          <Typography
                            fontSize={"0.90rem"}
                            borderBottom={"2px  solid  #000"}
                          >
                            من صاحب یک شرکت تور هستم
                          </Typography>
                        </Link>
                      </Box>
                    </Grid>
                    <Grid size={{ md: 6 }}>
                      <Box display={"flex"} gap={1} alignItems={"center"}>
                        <KeyOutlinedIcon />
                        <Link to={"/"}>
                          <Typography
                            fontSize={"0.90rem"}
                            whiteSpace={"nowrap"}
                            borderBottom={"2px  solid  #000"}
                          >
                            من یک خانه اجاره ای برای تعطیلات دارم
                          </Typography>
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ marginTop: "4rem" }}>
                  <Box sx={{ position: "relative" }}>
                    <InpsForAdd
                      icon={<LocationOnOutlinedIcon />}
                      isIcon={true}
                      isOptional={false}
                      isSelectBox={false}
                      label="آدرس"
                      position="start"
                      setIsOpenNewAddressBox={setIsOpenNewAddressBox}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        boxShadow: `var(--main-shadow)`,
                        display:
                          isOpenNewAddressBox && !IsOpenInpsAddress
                            ? "block"
                            : "none",
                        bgcolor: "#fff",
                        padding: "1rem ",
                        borderRadius: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <Button
                        sx={{ width: "100%" }}
                        onClick={() => (
                          setIsOpenInpsAddress(true),
                          setIsOpenNewAddressBox(false)
                        )}
                      >
                        <Typography>
                          <AddBoxIcon
                            sx={{
                              fontSize: "2.2rem",
                              "&.MuiSvgIcon-root  path": {
                                color: `var(--primary-color)`,
                              },
                            }}
                          />
                        </Typography>
                        <MainTPText text="به صورت دستی اضافه کنید" />
                      </Button>
                    </Box>
                  </Box>
                  <Box display={IsOpenInpsAddress ? "block" : "none"}>
                    <InpsForAdd
                      isIcon={false}
                      isOptional={true}
                      isSelectBox={false}
                      label=" آدرس دوم"
                      position="start"
                    />
                    <InpsForAdd
                      icon={<SearchOutlinedIcon />}
                      isIcon={true}
                      isOptional={false}
                      isSelectBox={false}
                      label="شهر/ شهرک"
                      position="end"
                    />
                    <InpsForAdd
                      icon={<SearchOutlinedIcon />}
                      isIcon={true}
                      isOptional={false}
                      isSelectBox={false}
                      label="کشور"
                      position="end"
                    />
                    <InpsForAdd
                      isIcon={false}
                      isOptional={true}
                      isSelectBox={false}
                      label="کد پستی"
                      position="end"
                    />
                  </Box>
                </Box>

                <Typography sx={{ fontWeight: "bold" }}>
                  آیا مالک، کارمند یا نماینده رسمی این مکان هستید؟
                </Typography>

                <Box display={"flex"} alignItems={"center"} marginTop={"1rem"}>
                  <Checkbox
                    onChange={() => setIsRepresentative(!isRepresentative)}
                  />
                  <Typography sx={{ fontWeight: "light" }}>
                    بله من نماینده این مکان هسنم
                  </Typography>
                </Box>
                {isRepresentative && (
                  <Box display={"flex"} alignItems={"center"}>
                    <Checkbox />
                    <Typography sx={{ fontWeight: "light" }}>
                      نظرات جدید درباره این مکان، راه‌های بهبود حضور آن در
                      Tripadvisor و موارد دیگر را برای من ایمیل کنید.{" "}
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box
                gap={3}
                alignItems={"center"}
                display={"flex"}
                sx={{ marginTop: "2rem" }}
              >
                <DarkBtn>ذخیره و ادامه دادن</DarkBtn>
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CreateingListing;
