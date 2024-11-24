import { Box, Typography } from '@mui/material';
import { FC } from 'react'

interface ICruisingGuideProps {
     mainText  :  string  ; 
       titleText : string ;   
} 

const CruisingGuide: FC<ICruisingGuideProps> = ({mainText ,  titleText}) => {
  return   (
      <Box  display={"flex"}  flexDirection={"column"}  gap={1}  marginTop={"2rem"}>
        <Typography   sx={{fontWeight : "bold"}}>{titleText}</Typography>
        <Typography   sx={{fontWeight : "light" ,   lineHeight : 2  , fontSize : "0.90rem"}}>{mainText}</Typography>
      </Box>
  )
}

export default CruisingGuide