import {
  Box,
  Button,
  Container,
  List,
  Slider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TourCardSlider from "../../components/CompTourAttractions/TourCardSlider";
import AccordionChildren from "../../components/AccordionChildren/AccordionChildren";
import CheckListCus from "../../components/CompTourAttractions/CheckListCus";
import { useState } from "react";
import { CusCircleIcon, CusCircleOutLine } from "../../elements/CusComponets";
const TourAttractions = () => {
  
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);

  };

  return (
    <Box>
      <Container>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "3rem", margin: "1.5rem  0" }}
        >
          تور <span className="text-red-500">دبی</span>
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ margin: "2rem  0" }}
        >
          <Button>FIrstBtn</Button>
          <Button>SecoundBtn</Button>
        </Box>
        <Grid container>
          <Grid size={{ md: 3, xs: 12 }} sx={{ marginTop: "2rem" }}>
            <AccordionChildren id={1} titleAccordion="دسته بندی محصولات">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus nameList="تورهای بندری" />
                <CheckListCus nameList="تورهای دیدنی" />
                <CheckListCus nameList="تورهای شهری" />
                <CheckListCus nameList="تورهای اتوبوس" />
              </List>
            </AccordionChildren>
            <AccordionChildren id={2} titleAccordion="زمان روز">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus nameList="صبح" />
                <CheckListCus nameList="ظهر" />
                <CheckListCus nameList="عصر" />
              </List>
            </AccordionChildren>
            <AccordionChildren id={3} titleAccordion="قیمت">
              ‌
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography sx={{ fontSize: "0.80rem" }}>
                  0 تومان - 50 میلیون
                </Typography>
                <Box width={"100%"} padding={"0  1rem"}>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                  />
                </Box>
              </Box>
            </AccordionChildren>
            <AccordionChildren id={4} titleAccordion="طول زمانی">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus nameList="بیشتر از 1 ساعت" />
                <CheckListCus nameList="1 تا 4 ساعت" />
                <CheckListCus nameList="4 ساعت تا یک  روز" />
              </List>
            </AccordionChildren>
            <AccordionChildren id={5} titleAccordion="جایزه">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus nameList={`انتخاب مسافران بهترین از بهترین ها`} />
              </List>
            </AccordionChildren>
            <AccordionChildren id={9} titleAccordion="رتبه بندی مسافران">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus
                  nameList={
                    <>
                      <Box>
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleIcon />
                      </Box>
                    </>
                  }
                />
                <CheckListCus
                  nameList={
                    <>
                      <Box>
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleOutLine />و بالاتر
                      </Box>
                    </>
                  }
                />
                <CheckListCus
                  nameList={
                    <>
                      <Box>
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleOutLine />
                        <CusCircleOutLine />و بالاتر
                      </Box>
                    </>
                  }
                />
                <CheckListCus
                  nameList={
                    <>
                      <Box>
                        <CusCircleIcon />
                        <CusCircleIcon />
                        <CusCircleOutLine />
                        <CusCircleOutLine />
                        <CusCircleOutLine />و بالاتر
                      </Box>
                    </>
                  }
                />
              </List>
            </AccordionChildren>
            <AccordionChildren id={6} titleAccordion="دسترسی پذیری">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus nameList="قابل دسترسی با ویلچر" />
                <CheckListCus nameList="کالسکه قابل دسترسی" />
                <CheckListCus nameList="حیوانات سرویس مجاز است" />
                <CheckListCus nameList="صندلی های نوزاد موجود است" />
              </List>
            </AccordionChildren>

            <AccordionChildren id={7} titleAccordion="زبان ها">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus nameList="فارسی" />
                <CheckListCus nameList="عربی" />
                <CheckListCus nameList="فرانسه" />
                <CheckListCus nameList="آلمان" />
              </List>
            </AccordionChildren>
            <AccordionChildren id={8} titleAccordion="پیشنهاد های خاص">
              <List sx={{ margin: 0, padding: 0 }}>
                <CheckListCus nameList="به احتمال زیاد به فروش می رسد" />
                <CheckListCus nameList="پیشنهاد های  خاص" />
              </List>
            </AccordionChildren>
          </Grid>
          <Grid size={{ md: 9 }}>
            <TourCardSlider
              TourPrice={10}
              TypeOfTour="تورهای 4WD"
              countOfLike={17000}
              disc="چندین فعالیت در بیابان را در یک گردش تجربه کنید، از جمله رانندگی با ATV - چیزی که بسیاری از تورها فقط با هزینه اضافی ارائه می دهند…"
              hours="6"
              imgCover={[
                "/public/images/Tourism/Slider/img6.jpg",
                "/public/images/Tourism/Slider/img8.jpg   ",
                "/public/images/Tourism/Slider/img10.jpg",
                "/public/images/Tourism/Slider/img11.jpg   ",
              ]}
              recommendedPercent={99}
              titeCard="ATV تپه های سرخ دبی، شترها، تماشای ستارگان و باربیکیو 5* کمپ الخیما"
              typeOfTraveler="بزرگسالان"
            />
            <TourCardSlider
              TourPrice={10}
              TypeOfTour="تورهای 4WD"
              countOfLike={17000}
              disc="چندین فعالیت در بیابان را در یک گردش تجربه کنید، از جمله رانندگی با ATV - چیزی که بسیاری از تورها فقط با هزینه اضافی ارائه می دهند…"
              hours="6"
              imgCover={[
                "/public/images/Tourism/Slider/img6.jpg",
                "/public/images/Tourism/Slider/img8.jpg   ",
                "/public/images/Tourism/Slider/img10.jpg",
                "/public/images/Tourism/Slider/img11.jpg   ",
              ]}
              recommendedPercent={99}
              titeCard="ATV تپه های سرخ دبی، شترها، تماشای ستارگان و باربیکیو 5* کمپ الخیما"
              typeOfTraveler="بزرگسالان"
            />
            <TourCardSlider
              TourPrice={10}
              TypeOfTour="تورهای 4WD"
              countOfLike={17000}
              disc="چندین فعالیت در بیابان را در یک گردش تجربه کنید، از جمله رانندگی با ATV - چیزی که بسیاری از تورها فقط با هزینه اضافی ارائه می دهند…"
              hours="6"
              imgCover={[
                "/public/images/Tourism/Slider/img6.jpg",
                "/public/images/Tourism/Slider/img8.jpg   ",
                "/public/images/Tourism/Slider/img10.jpg",
                "/public/images/Tourism/Slider/img11.jpg   ",
              ]}
              recommendedPercent={99}
              titeCard="ATV تپه های سرخ دبی، شترها، تماشای ستارگان و باربیکیو 5* کمپ الخیما"
              typeOfTraveler="بزرگسالان"
            />
            <TourCardSlider
              TourPrice={10}
              TypeOfTour="تورهای 4WD"
              countOfLike={17000}
              disc="چندین فعالیت در بیابان را در یک گردش تجربه کنید، از جمله رانندگی با ATV - چیزی که بسیاری از تورها فقط با هزینه اضافی ارائه می دهند…"
              hours="6"
              imgCover={[
                "/public/images/Tourism/Slider/img6.jpg",
                "/public/images/Tourism/Slider/img8.jpg   ",
                "/public/images/Tourism/Slider/img10.jpg",
                "/public/images/Tourism/Slider/img11.jpg   ",
              ]}
              recommendedPercent={99}
              titeCard="ATV تپه های سرخ دبی، شترها، تماشای ستارگان و باربیکیو 5* کمپ الخیما"
              typeOfTraveler="بزرگسالان"
            />
            <TourCardSlider
              TourPrice={10}
              TypeOfTour="تورهای 4WD"
              countOfLike={17000}
              disc="چندین فعالیت در بیابان را در یک گردش تجربه کنید، از جمله رانندگی با ATV - چیزی که بسیاری از تورها فقط با هزینه اضافی ارائه می دهند…"
              hours="6"
              imgCover={[
                "/public/images/Tourism/Slider/img6.jpg",
                "/public/images/Tourism/Slider/img8.jpg   ",
                "/public/images/Tourism/Slider/img10.jpg",
                "/public/images/Tourism/Slider/img11.jpg   ",
              ]}
              recommendedPercent={99}
              titeCard="ATV تپه های سرخ دبی، شترها، تماشای ستارگان و باربیکیو 5* کمپ الخیما"
              typeOfTraveler="بزرگسالان"
            />
            <TourCardSlider
              TourPrice={10}
              TypeOfTour="تورهای 4WD"
              countOfLike={17000}
              disc="چندین فعالیت در بیابان را در یک گردش تجربه کنید، از جمله رانندگی با ATV - چیزی که بسیاری از تورها فقط با هزینه اضافی ارائه می دهند…"
              hours="6"
              imgCover={[
                "/public/images/Tourism/Slider/img6.jpg",
                "/public/images/Tourism/Slider/img8.jpg   ",
                "/public/images/Tourism/Slider/img10.jpg",
                "/public/images/Tourism/Slider/img11.jpg   ",
              ]}
              recommendedPercent={99}
              titeCard="ATV تپه های سرخ دبی، شترها، تماشای ستارگان و باربیکیو 5* کمپ الخیما"
              typeOfTraveler="بزرگسالان"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TourAttractions;
