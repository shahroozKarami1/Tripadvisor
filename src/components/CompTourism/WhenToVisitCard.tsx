import { Box, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { IwhenToVisitCardProps } from "../../types/intefaces";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import DoNotDisturbOnTotalSilenceOutlinedIcon from "@mui/icons-material/DoNotDisturbOnTotalSilenceOutlined";
import styled from "@emotion/styled";
const WhenToVisitCard: FC<IwhenToVisitCardProps> = ({
  countOfRainDay,
  temperature,
  typeOfBusy,
  monthName,
  details,
  isDetails,
}) => {
  const CusListItem = styled(ListItem)({
    padding: "0.25rem  0",
    display: "flex",
    alignItems: "center",

    gap: 5,
  });
  const CusListItemTopic = styled(Typography)({
    fontWeight: "bold",
    fontSize: "0.80rem",
  });
  const CusListItemDetails = styled(Typography)({
    fontSize: "0.70rem",
    color: "#444",
  });
  const CusIcon = styled("span")({
    "& path": {
      color: "#64D2FF",
    },
    "& svg": {
      fontSize: "0.90rem",
    },
  });

  return (
    <Box
      sx={{
        padding: "1rem",
        borderRadius: "0.5rem",
        margin: "0  0.5rem",
        direction: "rtl",
        border: "1px  solid #ccc",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{monthName}</Typography>
      <List>
        <CusListItem>
          <CusIcon>
            <DeviceThermostatIcon />
          </CusIcon>
          <CusListItemTopic>{temperature} &deg;F</CusListItemTopic>
          {isDetails && (
            <CusListItemDetails>{details?.tempDetail}</CusListItemDetails>
          )}
        </CusListItem>
        <CusListItem>
          <CusIcon>
            <WaterDropIcon />
          </CusIcon>
          <CusListItemTopic>{countOfRainDay}روز بارانی</CusListItemTopic>
          {isDetails && (
            <CusListItemDetails>{details?.rainDayDetail}</CusListItemDetails>
          )}
        </CusListItem>
        <CusListItem>
          <CusIcon>
            <DoNotDisturbOnTotalSilenceOutlinedIcon />
          </CusIcon>
          <CusListItemTopic>{typeOfBusy} شلوغ </CusListItemTopic>
          {isDetails && (
            <CusListItemDetails>{details?.busyDetail}</CusListItemDetails>
          )}
        </CusListItem>
      </List>
    </Box>
  );
};

export default WhenToVisitCard;
