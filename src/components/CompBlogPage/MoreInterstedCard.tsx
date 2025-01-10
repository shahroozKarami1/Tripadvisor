import { Box, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IMoreInterstedCardProps {
    coverCard: string,
    textCard: string,
    markCard: string
    link :  string  ,  
}
const MarkCard = styled(Box)({
    position: "absolute", top: 0, right: 0,

})
const MarkCardText = styled(Typography)({
    color: "#fff", fontSize: "0.80rem", padding: "0.25rem", borderTopRightRadius: "1rem"
})
const MoreInterstedCard: FC<IMoreInterstedCardProps> = ({ coverCard, markCard, textCard  , link}) => {
    return (
        <Link to={link}>
          <Box>
            <Box sx={{ position: "relative", height: "150px" }}>
                <img src={coverCard} alt="" style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%", borderRadius: '1rem' }} />
                <MarkCard >
                    <MarkCardText sx={{ bgcolor: "var(--primary-color)" }}>{markCard}</MarkCardText>
                </MarkCard>
            </Box>
            <Box sx={{ margin: " 0.75rem   0.5rem" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem"  ,  ":hover": {
                    color : "var(--primary-color)"
                }}}>{textCard}</Typography>
            </Box>
        </Box>
        </Link>
    )
}

export default MoreInterstedCard