import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FC, useState } from "react";
const CapsuleOfDetails: FC<{ text: string }> = ({ text }) => {
  let [active, setActive] = useState<boolean>(false);

  return (
    <Button
      onClick={() => setActive(!active)}
      sx={{
        borderRadius: "2rem",
        border: "1px solid  #ccc",
        margin: "0.25rem",
        padding: "1rem",
        width: "100%",
        textAlign: "center",
        bgcolor: active ? "var(--primary-color)" : "transparent",
        cursor: "pointer",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{text}</Typography>
    </Button>
  );
};
const FinishStep = () => {
  return (
    <Box>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid size={{ md: 12 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            sx={{ paddingY: "1rem" }}
            gap={1}
          >
            <Typography
              sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
            >
              به ما بگویید به چه چیزی علاقه دارید
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontWeight: "light", color: "#444" }}
            >
              همه موارد کاربردی را انتخاب کنید
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <CapsuleOfDetails text="جاذبه های دیدنی" />
              <CapsuleOfDetails text="غذای عالی" />
              <CapsuleOfDetails text="جواهرات پنهان" />
              <CapsuleOfDetails text="گلف  بازی" />
              <CapsuleOfDetails text="غذاهای ترکی" />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <CapsuleOfDetails text="خرابه های باستانی" />
              <CapsuleOfDetails text="سلامتی و ورزش" />
              <CapsuleOfDetails text="هنر و ماجراجویی" />
              <CapsuleOfDetails text="فرهنگ" />
              <CapsuleOfDetails text="سینما" />
            </Box>
            <Box display={"flex"} justifyContent={"center"} flex={2}>
              <CapsuleOfDetails text="جاذبه های فناورانه" />
              <CapsuleOfDetails text="اقتصادی" />
              <CapsuleOfDetails text="امکان مدرن" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinishStep;
