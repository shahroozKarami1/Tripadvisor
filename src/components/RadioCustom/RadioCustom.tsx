import { FormControlLabel, Radio } from "@mui/material";
import { FC } from "react";

const RadioCustom: FC<{ textOfRadio: string }> = ({ textOfRadio }) => {
  return (
    <>
      <FormControlLabel sx={{margin :  0}} value= {textOfRadio} control={<Radio />} label= {textOfRadio} />
    </>
  );
};

export default RadioCustom;
