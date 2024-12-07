import styled from "@emotion/styled";
import { LinearProgress } from "@mui/material";
import { FC } from "react";

const ProgressBar: FC<{ value: number }> = ({ value }) => {
  const CusProgressBar = styled(LinearProgress)({
    width : '100%' , 
    borderRadius : "1rem" ,  
    height  :"13px" , 
    backgroundColor : "#E0E0E0" ,  
    "& .MuiLinearProgress-bar" : {
        backgroundColor : "var(--primary-color)" ,  

    }
  });
  return <CusProgressBar variant="determinate" value={value} />;
};

export default ProgressBar;

