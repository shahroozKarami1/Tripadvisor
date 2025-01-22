import { Box, Rating, Typography } from '@mui/material'
import { FC } from 'react'
import { CusCircleIcon, CusCircleOutLine } from '../../elements/CusComponets'

interface ICircleRateProps {
    isScoreText: boolean
    scoreText?: number;
    scoreNum: number
}

const CircleRate: FC<ICircleRateProps> = ({ scoreNum, scoreText, isScoreText }) => {
    return (
        <Box display={"flex"} alignItems={"center"} gap={1}>
            <Rating
                sx={{ direction: "ltr", transform: "rotate(-180deg)" }}
                readOnly
                value={scoreNum}
                precision={0.25}
                emptyIcon={<CusCircleOutLine />}
                icon={<CusCircleIcon />}
            />
            {
                isScoreText && <Typography sx={{ color: "#444" }}>{scoreText}</Typography>

            }
        </Box>
    )
}

export default CircleRate