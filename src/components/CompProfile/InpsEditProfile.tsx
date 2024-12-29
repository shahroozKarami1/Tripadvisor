import {
  Box,
  Input,
  InputAdornment,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { TInpsEditProfile } from "../../types/intefaces";

const InpsEditProfile: FC<TInpsEditProfile> = ({
  inpDetails,
  isTextArea,
  labelFrom,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ marginY: "0.75rem", gap: 1.25 }}
    >
      <Typography sx={{fontSize  : "0.90rem"}}>{labelFrom} :</Typography>
      {!isTextArea ? (
        <Input
          sx={{ gap: 0.25  ,   border :  "1px solid  #ccc" ,  padding : "0.5rem 0" ,  borderRadius : "0.5rem"}}
          value={inpDetails.value}
          placeholder={inpDetails.placeholder}
          startAdornment={
            <InputAdornment position="start">{inpDetails.icon}</InputAdornment>
          }
        />
      ) : (
        <TextareaAutosize minRows={3} placeholder={inpDetails.placeholder}  style={{border : "1px  solid  #ccc"  , borderRadius : "0.5rem" ,  padding :"0.5rem"}}/>
      )}
    </Box>
  );
};

export default InpsEditProfile;
