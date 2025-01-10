import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface MainTitleProps {
    isSubTitle: boolean,
    subTitle  ?: string,
    title: string
}

const MainTitle: FC<MainTitleProps> = ({ isSubTitle, subTitle, title }) => {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={1} marginY={"1rem"}>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem", color: "#000"   ,  lineHeight : 2 }}>{title}</Typography>
            {
                isSubTitle && (
                    <Typography sx={{ color: "#444", fontSize: "1.1rem" }}>
                        {
                            subTitle
                        }
                    </Typography>
                )
            }
        </Box>
    )
}

export default MainTitle