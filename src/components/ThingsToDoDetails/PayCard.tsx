import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
const PayCard = () => {
  const CusPayCard = styled(Box)({
    boxShadow: "var(--main-shadow)",
    borderRadius: "1rem ",
    padding: "1.2rem ",
    border: "1px  solid #ccc",
  });
  let [travelers, setTraveler] = useState<number>(1);
  let [isOpenTravelerBox, setIsOpenTravelerBox] = useState<boolean>(false);
  return (
    <CusPayCard>
      <Box display={"flex"} flexDirection={"column"} marginBottom={"0.5rem"}>
        <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
          از25.25 $
        </Typography>
        <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
          به ازای هر بزرگسالان
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
        تاریخ و مسافران را انتخاب کنید
      </Typography>
      <Box display={"flex"} alignItems={"center"} margin={"1rem  0"}>
        <Button
          sx={{
            border: "1px solid #ccc",
            borderRadius: "50%",
            height : "50px"  ,
            width : "50px"  ,
          }}
        >
          <Typography>{travelers}</Typography>
          <Typography>
            <PeopleAltOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          </Typography>
        </Button>
      </Box>
    </CusPayCard>
  );
};

export default PayCard;
