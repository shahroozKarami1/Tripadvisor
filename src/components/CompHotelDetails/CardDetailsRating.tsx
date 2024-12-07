import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import React, { FC } from "react";
import {
  CusCardDetails,
  CusCircleIcon,
  CusCircleOutLine,
} from "../../elements/CusComponets";
import BrunchDiningOutlinedIcon from "@mui/icons-material/BrunchDiningOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
const ListRating: FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "  0",
        margin: 0,
      }}
    >
      <Box display={"flex"} alignItems={"center"}>
        <IconButton sx={{ paddingRight: 0 }}>{icon}</IconButton>
        <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
          {text}
        </Typography>
      </Box>
      <Box display={"flex"}>
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleOutLine />
      </Box>
    </ListItem>
  );
};
const CardDetailsRating = () => {
  return (
    <CusCardDetails>
      <Typography sx={{ fontWeight: "bold" }}>رتبه بندی و بررسی</Typography>
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        sx={{ padding: "0.75rem 0" }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          3.5
        </Typography>
        <Box display={"flex"}>
          <CusCircleIcon />
          <CusCircleIcon />
          <CusCircleIcon />
          <CusCircleIcon />
          <CusCircleOutLine />
        </Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "0.80rem" }}>
          1,900 دیدگاه
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "0.80rem" }}>
        17# از 46 رستوران در ایران{" "}
      </Typography>
      <List sx={{ marginTop: "1.7rem", borderTop: "1px  solid  #ccc" }}>
        <Typography
          sx={{ fontSize: "0.80rem", fontWeight: "bold", padding: "1rem 0" }}
        >
          رتبه بندی ها
        </Typography>
        <ListRating icon={<BrunchDiningOutlinedIcon />} text="غدا" />
        <ListRating icon={<RoomServiceOutlinedIcon />} text="سرویس" />
        <ListRating icon={<AccountBalanceWalletOutlinedIcon />} text="ارزش" />
        <ListRating icon={<WorkspacePremiumOutlinedIcon />} text="فضا" />
      </List>
    </CusCardDetails>
  );
};

export default CardDetailsRating;
