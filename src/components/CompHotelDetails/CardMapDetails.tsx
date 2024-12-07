import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { CusCardDetails, CusOutLineLinkBtn } from "../../elements/CusComponets";
import React, { FC } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const ItemDetailsMap: FC<{
  icon: React.ReactNode;
  text: string;
  isLink: boolean;
}> = ({ icon, text, isLink }) => {
  return (
    <ListItem sx={{ display: "flex", padding: 0, margin: 0 }}>
      <IconButton sx={{ paddingRight: "0" }}>{icon}</IconButton>
      {!isLink ? (
        <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
          {text}
        </Typography>
      ) : (
        <Link sx={{ fontSize: "0.80rem", color: "#444" }} href="/">
          {text}
        </Link>
      )}
    </ListItem>
  );
};

const CardMapDetails = () => {
  return (
    <CusCardDetails>
      <Typography sx={{ fontWeight: "bold" }}>موقععیت و تماس</Typography>
      <img
        src="/public/images/HotelDetail/map.png"
        alt=""
        className="rounded-md  mt-5"
      />
      <List>
        <ItemDetailsMap
          isLink={true}
          icon={<FmdGoodOutlinedIcon />}
          text="تهران  /  سعادت آباد /  میدان  شهرداری"
        />
        <ItemDetailsMap
          isLink={false}
          icon={<MapsHomeWorkOutlinedIcon />}
          text="ساختمان کاسپین"
        />
        <Box display={"flex"} justifyContent={"space-evenly"}>
          <ItemDetailsMap
            isLink={true}
            icon={<ComputerOutlinedIcon />}
            text="وبسایت"
          />
          <ItemDetailsMap
            isLink={true}
            icon={<EmailOutlinedIcon />}
            text="ایمیل"
          />
        </Box>
        <ItemDetailsMap
          isLink={true}
          icon={<PhoneEnabledOutlinedIcon />}
          text="09305151712"
        />
        <Box>
          <CusOutLineLinkBtn>توسعه این لیست</CusOutLineLinkBtn>
        </Box>
      </List>
      ‌
    </CusCardDetails>
  );
};

export default CardMapDetails;
