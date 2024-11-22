import { FC } from 'react'
import { IParagraphProps } from '../../types/intefaces'
import { Box, Typography } from '@mui/material'


const Paragraph: FC<IParagraphProps> = ({header  ,  textBody}) => {
  return( <Box display={"flex"} sx={{margin : "0.5rem  0"}}   gap={1} flexDirection={"column"}  justifyContent={"flex-start"}>

    <Typography sx={{fontWeight : "bold" ,  fontSize : "1rem"}}>{header}</Typography>
    <Typography sx={{fontSize : "0.80rem"  ,  lineHeight :2}}>{textBody}</Typography>

  </Box>)
}

export default Paragraph