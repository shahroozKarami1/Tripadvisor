import { Box, styled, Typography } from '@mui/material'
import ReadMore from '../ReadMore/ReadMore'
import { FC } from 'react'
import TimelapseIcon from '@mui/icons-material/Timelapse';
import MapIcon from '@mui/icons-material/Map';
const CosWrapBoxSliderDetails = styled(Box)({
    boxShadow: "var(--main-shadow)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height : '100%' ,   
    borderRadius: "0.5rem",
    position: "relative"

})

const DetailsBoxSlider: FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => {
    return (
        <Box display={"flex"} alignItems={"center"} gap={1}  marginY={"0.25rem"}>
            <Box sx={{
                "& svg  ": {
                    fontSize: "1.3rem",

                },
                "& path": {
                    color: "#444"
                }
            }}>
                {icon}
            </Box>
            <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>{text}</Typography>
        </Box>
    )
}
const BoxSliderDetails = () => {
    return (
        <CosWrapBoxSliderDetails  >
            <Typography sx={{ marginY: '0.5rem', fontWeight: "bold", fontSize: "1.4rem" }}>درباره </Typography>
            <ReadMore lineShow={5} textBody='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' />
            <DetailsBoxSlider icon={<TimelapseIcon />} text='مدت زمان :  1 -2 ساعت' />
            <DetailsBoxSlider icon={<MapIcon />} text=' مکان :  تهران  / ایران ' />
        </CosWrapBoxSliderDetails>
    )
}

export default BoxSliderDetails
