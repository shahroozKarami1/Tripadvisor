import { Typography } from '@mui/material'
import { FC } from 'react'

interface IMentionTextProps {
    text: string
}

const MentionText: FC<IMentionTextProps> = ({ text }) => {
    return (
        <Typography  sx={{color :  "#444"   , fontSize : "0.90rem" }}>
            {
                text
            }
        </Typography>
    )
}

export default MentionText