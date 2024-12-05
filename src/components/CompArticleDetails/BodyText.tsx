import { Typography } from '@mui/material'
import { FC } from 'react'



const BodyText: FC<{textArticle  :  string}> = ({textArticle}) => {
  return <Typography sx={{margin : "0.5rem"}}>{textArticle}</Typography>
}

export default BodyText