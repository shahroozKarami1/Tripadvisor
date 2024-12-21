import {
  Box,
  Container,
  Input,
  InputAdornment,
  Pagination,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import DataPicker from "../../components/DataPicker/DataPicker";
import DarkBtn from "../../components/DarkBtn/DarkBtn";
import Grid from "@mui/material/Grid2";
import MainCardDetails from "../../components/CompVacationRentalDetails/MainCardDetails";
import AccordionChildren from "../../components/AccordionChildren/AccordionChildren";
import AutoComps from "../../components/CompVacationRentalDetails/AutoComps";
import CheckListCus from "../../components/CompTourAttractions/CheckListCus";
import { useState } from "react";
import RadioCustom from "../../components/RadioCustom/RadioCustom";
import { useMedia } from "../../context/MediaQueryContext";

const VacationRentalDetails = () => {
  let [rateOfSlider, setRateOfSlider] = useState(20);
  let isXs = useMedia();
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setRateOfSlider(newValue as number);
  };

  let dataAutoComplete = [
    {
      label: "هیچی",
    },
    {
      label: "+1",
    },
    {
      label: "+2",
    },
    {
      label: "+3",
    },
    {
      label: "+4",
    },
    {
      label: "+5",
    },
    {
      label: "+6",
    },
    {
      label: "+7",
    },
    {
      label: "+8",
    },
    {
      label: "+9",
    },
    {
      label: "+10",
    },
    {
      label: "+11",
    },
    {
      label: "+12",
    },
    {
      label: "+13",
    },
    {
      label: "+14",
    },
    {
      label: "+15",
    },
  ];
  return (
    <Box>
      <Container>
        ‌‌
        <Box display={"flex"} flexDirection={"column"}>
          <Box>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                paddingBottom: "2rem",
              }}
            >
              جنگل های هیرکانی
            </Typography>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={isXs ? "column" : "row"}
            justifyContent={"space-between"}
          >
            <Box
              display={"flex"}
              flexDirection={isXs ? "column" : "row"}
              alignItems={"center"}
              gap={1}
            >
              <Input
                placeholder="مقصد"
                sx={{
                  border: "1px  solid  #000",
                  borderRadius: "2rem",
                  padding: "  0.75rem  1rem",
                  width: "100%",

                  ":after": {
                    display: "none",
                  },
                  ":before": {
                    display: "none",
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FmdGoodOutlinedIcon />
                  </InputAdornment>
                }
              />

              <DataPicker placeholder="تاریخ پذیرش :" />
              <DataPicker placeholder="تاریخ ترک کردن :" />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <DarkBtn>
                <FmdGoodOutlinedIcon sx={{ path: { color: "#fff" } }} />
                نقشه
              </DarkBtn>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={5} sx={{flexDirection : isXs ? "column-reverse" : "row"}} >
          <Grid size={{ md: 9 ,  xs  :  12 }}>
            <MainCardDetails
              moreInformation={{
                AboutProperty:
                  "خلاصه: در هفت جریب ملک مشرف به خلیج مکزیک قرار گرفته است، تجربه لوکسی را در Beachside Resort & Residences تجربه کنید. در ترکیبی عالی از ماجراجویی و آرامش در آفتابی کی وست استراحت کنید. در ملک، می‌توانید به استخر استراحتگاه، اسکله تفریحی ما، و امکان رزرو دسترسی پیدا کنید",
                allowed: {
                  kid: false,
                  pet: true,
                  smoking: true,
                },
                items: [
                  "یخچال",
                  "بالکن",
                  "ماکروویو",
                  "گاز",
                  "آسانسور/ حمل بار",
                ],
              }}
              cardSliderImgs={[
                "/public/images/RentDetails/SliderCard/img1.jpg",
                "/public/images/RentDetails/SliderCard/img2.jpg",
                "/public/images/RentDetails/SliderCard/img3.jpg",
              ]}
              countOfBathroom={2}
              countOfBedroom={3}
              countOfSleeps={4}
              title="     کابین استخر خصوصی با گرمایش داخلی لوکس در چند دقیقه فاصله از
                مرکز شهر"
            />
            <MainCardDetails
              moreInformation={{
                AboutProperty:
                  "خلاصه: در هفت جریب ملک مشرف به خلیج مکزیک قرار گرفته است، تجربه لوکسی را در Beachside Resort & Residences تجربه کنید. در ترکیبی عالی از ماجراجویی و آرامش در آفتابی کی وست استراحت کنید. در ملک، می‌توانید به استخر استراحتگاه، اسکله تفریحی ما، و امکان رزرو دسترسی پیدا کنید",
                allowed: {
                  kid: false,
                  pet: true,
                  smoking: true,
                },
                items: [
                  "یخچال",
                  "بالکن",
                  "ماکروویو",
                  "گاز",
                  "آسانسور/ حمل بار",
                ],
              }}
              cardSliderImgs={[
                "/public/images/RentDetails/SliderCard/img1.jpg",
                "/public/images/RentDetails/SliderCard/img2.jpg",
                "/public/images/RentDetails/SliderCard/img3.jpg",
              ]}
              countOfBathroom={2}
              countOfBedroom={3}
              countOfSleeps={4}
              title="     کابین استخر خصوصی با گرمایش داخلی لوکس در چند دقیقه فاصله از
                مرکز شهر"
            />
            <MainCardDetails
              moreInformation={{
                AboutProperty:
                  "خلاصه: در هفت جریب ملک مشرف به خلیج مکزیک قرار گرفته است، تجربه لوکسی را در Beachside Resort & Residences تجربه کنید. در ترکیبی عالی از ماجراجویی و آرامش در آفتابی کی وست استراحت کنید. در ملک، می‌توانید به استخر استراحتگاه، اسکله تفریحی ما، و امکان رزرو دسترسی پیدا کنید",
                allowed: {
                  kid: false,
                  pet: true,
                  smoking: true,
                },
                items: [
                  "یخچال",
                  "بالکن",
                  "ماکروویو",
                  "گاز",
                  "آسانسور/ حمل بار",
                ],
              }}
              cardSliderImgs={[
                "/public/images/RentDetails/SliderCard/img1.jpg",
                "/public/images/RentDetails/SliderCard/img2.jpg",
                "/public/images/RentDetails/SliderCard/img3.jpg",
              ]}
              countOfBathroom={2}
              countOfBedroom={3}
              countOfSleeps={4}
              title="     کابین استخر خصوصی با گرمایش داخلی لوکس در چند دقیقه فاصله از
                مرکز شهر"
            />
            <MainCardDetails
              moreInformation={{
                AboutProperty:
                  "خلاصه: در هفت جریب ملک مشرف به خلیج مکزیک قرار گرفته است، تجربه لوکسی را در Beachside Resort & Residences تجربه کنید. در ترکیبی عالی از ماجراجویی و آرامش در آفتابی کی وست استراحت کنید. در ملک، می‌توانید به استخر استراحتگاه، اسکله تفریحی ما، و امکان رزرو دسترسی پیدا کنید",
                allowed: {
                  kid: false,
                  pet: true,
                  smoking: true,
                },
                items: [
                  "یخچال",
                  "بالکن",
                  "ماکروویو",
                  "گاز",
                  "آسانسور/ حمل بار",
                ],
              }}
              cardSliderImgs={[
                "/public/images/RentDetails/SliderCard/img1.jpg",
                "/public/images/RentDetails/SliderCard/img2.jpg",
                "/public/images/RentDetails/SliderCard/img3.jpg",
              ]}
              countOfBathroom={2}
              countOfBedroom={3}
              countOfSleeps={4}
              title="     کابین استخر خصوصی با گرمایش داخلی لوکس در چند دقیقه فاصله از
                مرکز شهر"
            />
            <MainCardDetails
              moreInformation={{
                AboutProperty:
                  "خلاصه: در هفت جریب ملک مشرف به خلیج مکزیک قرار گرفته است، تجربه لوکسی را در Beachside Resort & Residences تجربه کنید. در ترکیبی عالی از ماجراجویی و آرامش در آفتابی کی وست استراحت کنید. در ملک، می‌توانید به استخر استراحتگاه، اسکله تفریحی ما، و امکان رزرو دسترسی پیدا کنید",
                allowed: {
                  kid: false,
                  pet: true,
                  smoking: true,
                },
                items: [
                  "یخچال",
                  "بالکن",
                  "ماکروویو",
                  "گاز",
                  "آسانسور/ حمل بار",
                ],
              }}
              cardSliderImgs={[
                "/public/images/RentDetails/SliderCard/img1.jpg",
                "/public/images/RentDetails/SliderCard/img2.jpg",
                "/public/images/RentDetails/SliderCard/img3.jpg",
              ]}
              countOfBathroom={2}
              countOfBedroom={3}
              countOfSleeps={4}
              title="     کابین استخر خصوصی با گرمایش داخلی لوکس در چند دقیقه فاصله از
                مرکز شهر"
            />
            <MainCardDetails
              moreInformation={{
                AboutProperty:
                  "خلاصه: در هفت جریب ملک مشرف به خلیج مکزیک قرار گرفته است، تجربه لوکسی را در Beachside Resort & Residences تجربه کنید. در ترکیبی عالی از ماجراجویی و آرامش در آفتابی کی وست استراحت کنید. در ملک، می‌توانید به استخر استراحتگاه، اسکله تفریحی ما، و امکان رزرو دسترسی پیدا کنید",
                allowed: {
                  kid: false,
                  pet: true,
                  smoking: true,
                },
                items: [
                  "یخچال",
                  "بالکن",
                  "ماکروویو",
                  "گاز",
                  "آسانسور/ حمل بار",
                ],
              }}
              cardSliderImgs={[
                "/public/images/RentDetails/SliderCard/img1.jpg",
                "/public/images/RentDetails/SliderCard/img2.jpg",
                "/public/images/RentDetails/SliderCard/img3.jpg",
              ]}
              countOfBathroom={2}
              countOfBedroom={3}
              countOfSleeps={4}
              title="     کابین استخر خصوصی با گرمایش داخلی لوکس در چند دقیقه فاصله از
                مرکز شهر"
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Pagination count={10} />
            </Box>
          </Grid>
          <Grid size={{ md: 3, xs: 12 }}>
            <AccordionChildren id={10} titleAccordion="اتاق خواب ها">
              <AutoComps dataOptions={dataAutoComplete} />
            </AccordionChildren>
            <AccordionChildren id={25} titleAccordion="حمام ها">
              <AutoComps dataOptions={dataAutoComplete} />
            </AccordionChildren>
            <AccordionChildren id={60} titleAccordion="امکانات رفاهی">
              <CheckListCus nameList={"اینترنت یا فای (787)"} />
              <CheckListCus nameList={"تهویه مطبوع (766)"} />
              <CheckListCus nameList={"ماشین لباسشویی/خشک کن (616)"} />
              <CheckListCus nameList={"سایر فضای باز (566)"} />
            </AccordionChildren>
            <AccordionChildren id={15} titleAccordion="مناسب بودن">
              <CheckListCus nameList={"مناسب برای کودکان (762)"} />
              <CheckListCus nameList={"مناسب برای حیوانات (150)"} />
              <CheckListCus nameList={"دسترسی بزرگتر (616)"} />
              <CheckListCus nameList={"سیگار کشیدن مجاز است  (566)"} />
            </AccordionChildren>
            <AccordionChildren id={60} titleAccordion="نوع ملک">
              <CheckListCus nameList={"خانه اجاره ای برای تعطیلات (762)"} />
              <CheckListCus nameList={"مناسب برای حیوانات (150)"} />
            </AccordionChildren>
            <AccordionChildren id={60} titleAccordion="ویژگی های متمایز">
              <CheckListCus nameList={"قایق موجود (762)"} />
              <CheckListCus nameList={"ساحل خصوصی  (150)"} />
              <CheckListCus nameList={"آشپز خصوصی  (150)"} />
            </AccordionChildren>
            <AccordionChildren id={30} titleAccordion="فاصله از">
              <Typography>{rateOfSlider} کیلومتر</Typography>
              <Slider
                size="medium"
                value={typeof rateOfSlider === "number" ? rateOfSlider : 20}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
              />

              <RadioGroup>
                <RadioCustom textOfRadio="خانه و موزه دکتر حسابی" />
                <RadioCustom textOfRadio="پارک علم و فناوری" />
                <RadioCustom textOfRadio="باغ گیاه شناسی و گردشگری الیه " />
                <RadioCustom textOfRadio="توچال /  دربند  / درکه  " />
              </RadioGroup>
            </AccordionChildren>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VacationRentalDetails;
