import { Avatar, Box, Typography } from '@mui/material'
import { FC } from 'react'

const WriterProfile: FC<{ profile: string, name: string }> = ({ name, profile }) => {
    return (
        <Box display={"flex"} alignItems={"center"} gap={1} >
            <Avatar alt="Remy Sharp" src={profile} sx={{ width: 24, height: 24 }} />
            <Typography sx={{ display: "flex", gap: 0.5, fontSize: "0.90rem", color: "#444" }}  >
                به قلم
                <Typography sx={{ fontSize: "0.90rem", color: "var(--primary-color)", fontWeight: "bold" }}>
                    {
                        name
                    }
                </Typography>
            </Typography>
        </Box>
    )
}

export default WriterProfile
