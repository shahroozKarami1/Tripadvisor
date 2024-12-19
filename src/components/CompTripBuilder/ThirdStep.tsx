import { Box, Button, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { FC, useState } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
const ThirdStep = () => {
  const [activeBox, setActiveBox] = useState<string | null>("1");
  const SubQuestionBox: FC<{ questionText: string }> = ({ questionText }) => {
    const [AnswerBtnActive, setAnswerBtnActive] = useState<string | null>("no");

    const isActiveStyle = (value: string) => ({
      color: "#000",
      padding: "  0.5rem 3rem",
      fontSize: "1.1rem",
      borderRadius: "2rem",
      backgroundColor:
        AnswerBtnActive === value ? "var(--primary-color)" : "#fff",
      border:
        AnswerBtnActive === value ? "1px solid #4caf50" : "1px solid #ccc",
      "&:hover": {
        backgroundColor: AnswerBtnActive === value ? "#388e3c" : "#e0e0e0",
      },
    });
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        alignItems={"center"}
        sx={{ marginY: "2rem" }}
      >
        <Typography sx={{ color: "#444", fontSize: "1.1rem" }}>
          {questionText}
        </Typography>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button
            sx={isActiveStyle("yes")}
            onClick={() => setAnswerBtnActive("yes")}
          >
            بله
          </Button>
          <Button
            sx={isActiveStyle("no")}
            onClick={() => setAnswerBtnActive("no")}
          >
            خیر
          </Button>
        </Box>
      </Box>
    );
  };
  const BoxTypeOfTrip: FC<{
    icon: React.ReactNode;
    textCard: string;
    id: string;
  }> = ({ icon, id, textCard }) => {
    const isActive = activeBox === id;

    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          padding: "1rem",
          border: "1px  solid  #ccc",
          borderRadius: "1rem",
          cursor: "pointer",
          bgcolor: isActive ? "var(--primary-color) " : "#fff",
        }}
        id={id}
        onClick={() => setActiveBox(id)}
      >
        <Typography>{icon}</Typography>
        <Typography>{textCard}</Typography>
      </Box>
    );
  };
  const renderExtraText = () => {
    if (activeBox === "3") {
      return <SubQuestionBox questionText="آیا با بچه ها سفر میکنید ؟" />;
    }
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid size={{ md: 12 }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          paddingBottom={"2rem"}
        >
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
          >
            چه نوع سفری را در نظر دارید؟
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "light",
              fontSize: "1rem",
              color: "#444",
            }}
          >
            یکی را انتخاب کنید
          </Typography>
        </Box>
        <Grid container justifyContent={"center"} spacing={2}>
          <Grid size={{ md: 3, xs: 6 }}>
            <BoxTypeOfTrip
              icon={<PersonOutlinedIcon />}
              id="1"
              textCard="سفر تنهایی"
            />
          </Grid>
          <Grid size={{ md: 3, xs: 6 }}>
            <BoxTypeOfTrip
              icon={<FavoriteBorderOutlinedIcon />}
              id="2"
              textCard="سفر با زوج"
            />
          </Grid>
          <Grid size={{ md: 3, xs: 6 }}>
            <BoxTypeOfTrip
              icon={<GroupOutlinedIcon />}
              id="3"
              textCard="سفر دوستانه"
            />
          </Grid>
          <Grid size={{ md: 3, xs: 6 }}>
            <BoxTypeOfTrip
              icon={<FamilyRestroomOutlinedIcon />}
              id="4"
              textCard="سفر خانوادگی"
            />
          </Grid>
        </Grid>
        {activeBox && <>{renderExtraText()}</>}
        <SubQuestionBox questionText="آیا با حیوانات خانگی سفر میکنید ؟" />
      </Grid>
    </Grid>
  );
};

export default ThirdStep;
