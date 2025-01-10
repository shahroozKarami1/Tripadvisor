import { Box, Typography } from '@mui/material'
import { FC } from 'react'



const SingleParagraph: FC<{ text: string }> = ({ text }) => {
    return (
        <Box>
            <Typography sx={{ lineHeight: 2, marginY: "1rem", color: '#444'  ,}}>
                {
                    text

                }
            </Typography>
        </Box>
    )
}

export default SingleParagraph