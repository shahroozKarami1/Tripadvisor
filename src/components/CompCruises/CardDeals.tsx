import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { ICardDealsProps } from "../../types/intefaces";
import { CusCardDeals } from "../../elements/CusComponets";
import styled from "@emotion/styled";

const CardDeals: FC<ICardDealsProps> = ({
  AfterDisCount,
  beforeDisCount,
  countDay,
  date,
  departs,
  distination,
  nameShip,
}) => {
  const CusVIewBtn = styled(Button)({
    border: "1px  solid  #000",
    fontWeight: "bold",
    color: "#000",
    width: "100%",
  });
  const CusListItem = styled(ListItem)({
    fontSize: "0.80rem",
  });

  return (
    <CusCardDeals>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography sx={{ fontWeight: "bold" }}>
          {countDay} کروز شبانه به {distination}
        </Typography>
        <List>
          <CusListItem>
            <span className="font-bold">کشتی :</span> {nameShip}
          </CusListItem>
          <CusListItem>
            <span className="font-bold">تاریخ کشتیرانی: </span> {date}
          </CusListItem>
          <CusListItem>
            <span className="font-bold">حرکت:</span> {departs}
          </CusListItem>
        </List>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        gap={1}
      >
        <Typography
          sx={{
            color: "#b03038",
            fontWeight: "bold",
            fontSize: "0.80rem",
            textDecoration: "line-through",
          }}
        >
          {beforeDisCount}ریال
        </Typography>
        <Typography sx={{ fontSize: "1.2em", fontWeight: "bold" }}>
          {AfterDisCount}ریال
        </Typography>
        <CusVIewBtn>دیدن کروز</CusVIewBtn>
      </Box>
    </CusCardDeals>
  );
};

export default CardDeals;
