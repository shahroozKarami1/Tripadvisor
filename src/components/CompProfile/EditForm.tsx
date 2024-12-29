import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import InpsEditProfile from "./InpsEditProfile";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkBtn from "../DarkBtn/DarkBtn";
import BtnWhteBlackTex from "../BtnWhiteTextBlackColor/BtnWhteBlackTex";
interface IEditForm {
  openState: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditForm: FC<IEditForm> = ({ openState, setState }) => {
  const handlerClose = () => {
    setState(false);
  };
  return (
    <Dialog
      open={openState}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth={"md"}
      onClose={handlerClose}

    >
      <DialogContent>
        <Grid container justifyContent={"center"} gap={2}>
          <Grid size={{ md: 2 }}>
            <Box width={"120px"}>
              <img
                src="/public/images/NextTrip/img4.jpg"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 8 }}>
            <Box display={"flex"} flexDirection={"column"}>
              <InpsEditProfile
                inpDetails={{
                  icon: <PersonOutlineOutlinedIcon />,
                  placeholder: "اسم خود را وارد کنید ...",
                  value: "شهروز کرمی",
                }}
                isTextArea={false}
                labelFrom="اسم"
              />
              <InpsEditProfile
                inpDetails={{
                  icon: <FingerprintOutlinedIcon />,
                  placeholder: "اسم خود را وارد کنید ...",
                  value: "shahrooz2020",
                }}
                isTextArea={false}
                labelFrom="نام کاربری"
              />
              <InpsEditProfile
                inpDetails={{
                  icon: <SearchIcon />,
                  placeholder: "جستجو کنید ...",
                  value: "",
                }}
                isTextArea={false}
                labelFrom="شهر فعلی"
              />
              <InpsEditProfile
                inpDetails={{
                  icon: <LanguageIcon />,
                  placeholder: "وبسایت خود را وارد کنید",
                  value: "",
                }}
                isTextArea={false}
                labelFrom="وبسایت"
              />
              <InpsEditProfile
                inpDetails={{
                  placeholder: "جزییاتی از خودتان  ذکر کنید",
                  value: " ",
                }}
                isTextArea={true}
                labelFrom="درباره شما"
              />
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
  <Box display={"flex"}  gap={1} alignItems={"center"} justifyContent={"flex-end"} sx={{paddingLeft : "2rem" ,  paddingBottom : "1rem"}}>
  <BtnWhteBlackTex link="" title="کنسل"  funcHandler ={handlerClose} />
  <DarkBtn>ذخیره</DarkBtn>
  </Box>
    </Dialog>
  );
};

export default EditForm;
