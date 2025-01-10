import { Chip } from '@mui/material'
import { FC } from 'react'


const ChipsBlog: FC<{ text: string }> = ({ text }) => {
    return (
        <Chip label={text} />


    )
}

export default ChipsBlog