import { FC } from 'react'
import TextField from '@mui/material/TextField';
import { styled, TextareaAutosize } from '@mui/material';

interface InpCommentsProps {
    isTextArea: boolean,
    textPlaceholder: string,


}
const CusInp = styled(TextField)({
    width: "100%",
    direction: "rtl",

})
const CusTextArea = styled(TextareaAutosize)({
    width: "100%",
    direction: "rtl",
    padding: "1rem",
    border: "1px  solid #ccc",
})
const InpComments: FC<InpCommentsProps> = ({ isTextArea, textPlaceholder }) => {
    return (
        <>
            {
                isTextArea ? (
                    <CusTextArea minRows={5} cols={50} placeholder={textPlaceholder} />

                ) : (

                    <CusInp label={textPlaceholder} placeholder={textPlaceholder} />
                )
            }

        </>
    )
}

export default InpComments