import Grid from "@mui/material/Grid2"
import InpComments from "./InpComments"
import CheckListCus from "../CompTourAttractions/CheckListCus"
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn"
import { Box } from "@mui/material"
import { useMedia } from "../../context/MediaQueryContext"
const FormComment = () => {
let  isXs =  useMedia()
    return (
        <Grid container spacing={2}  sx={{marginY :  isXs ? "2rem" :  "0"}}>
            <Grid size={{ md: 12 ,  xs :  12}}>
                <InpComments isTextArea={true} textPlaceholder="دیدگاه شما" />

            </Grid>
            <Grid size={{ md: 6   ,  xs :  12}}>
                <InpComments isTextArea={false} textPlaceholder="دیدگاه شما" />

            </Grid>
            <Grid size={{ md: 6  ,  xs :  12 }}>
                <InpComments isTextArea={false} textPlaceholder="دیدگاه شما" />

            </Grid>
            <Box display={"flex"} flexDirection={"column"} gap={1} sx={{ width: "100%" }}>
                <CheckListCus nameList="نام و ایمیل من برای ارسال دیدگاه‌های بعدی ذخیره شود." />
                <Box display={"flex"} justifyContent={"flex-end"}>
                    <PrimaryBtn text="ارسال" />

                </Box>
            </Box>
        </Grid>
    )
}

export default FormComment
