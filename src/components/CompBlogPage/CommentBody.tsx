import { Box, Button, Typography } from '@mui/material'
import { FC, useState } from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReplyIcon from '@mui/icons-material/Reply';
import FormComment from './FormComment';
import TitleSection from '../ComHomePage/TitleSection';
interface ICommentBodyProps {
    profile: string,
    name: string,
    commentBody: string,
    commentDate: string,
    isReplyComment: boolean;
    replyComment?: {
        profile: string,
        name: string,
        commentBody: string,
        commentDate: string,
    }[]
}

const CommentBody: FC<ICommentBodyProps> = ({ commentBody, commentDate, name, profile, isReplyComment, replyComment }) => {
    let [isOpneFormReply, setIsOpenFormReply] = useState(false)
    return (
        <>

            <Box >
                <Box display={"flex"} alignItems={"flex-start"} gap={2}>
                    <Box width={"250px"} mt={"0.75rem"}>
                        <img src={profile ? profile : "/public/images/user.jpg"} alt=""
                            style={{ borderRadius: "0.75rem", objectFit: "cover", objectPosition: 'center', width: "100%", height: "100%" }} />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}  >
                        ‌<Box display={"flex"} justifyContent={"space-between"} mb={"0.5rem"}>
                            <Typography sx={{ color: "gray" }}>{name} می گوید </Typography>
                            <Box display={"flex"} alignItems={"center"} gap={0.5}>
                                <CalendarTodayIcon sx={{
                                    fontSize: "1.2rem", "& path": {
                                        color: "gray"
                                    }
                                }} />
                                <Typography sx={{ fontSize: "0.80rem", color: "gray" }}> {commentDate} پیش  </Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ color: "gray", fontSize: '0.85rem', lineHeight: 1.7 }}>
                            {
                                commentBody
                            }
                        </Typography>
                        <Box display={"flex"} justifyContent={"flex-end"}>
                            <Button onClick={() => setIsOpenFormReply(!isOpneFormReply)}>
                                <ReplyIcon sx={{
                                    fontSize: "1.3rem",
                                    "& path": {
                                        color: '#444'
                                    }
                                }} />
                                <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>پاسخ</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {
                    isOpneFormReply && (


                        <Box >
                            <Box sx={{ marginY: "1rem", borderBottom: "1px  solid  #444", pb: "1rem" }}>
                                <TitleSection isSubTitle={false} mainTitle={`پاسخ به ${name}`} />
                            </Box>
                            <Box display={"flex"} justifyContent={"flex-end"} my={"1rem"}>
                                ‌<Button sx={{ color: "var(--primary-color)" }} onClick={() => setIsOpenFormReply(false
                                )}>لفو پاسخ</Button>
                            </Box>
                            <FormComment />

                        </Box>

                    )
                }
            </Box>

            <Box sx={{ margin: " 0 2rem" }}>
                {
                    isReplyComment && (
                        replyComment?.map(({ commentBody, commentDate, name, profile }) => {
                            return (
                                <Box >
                                    <Box display={"flex"} alignItems={"flex-start"} gap={2}>
                                        <Box width={"250px"} mt={"0.75rem"}>
                                            <img src={profile ? profile : "/public/images/user.jpg"} alt=""
                                                style={{ borderRadius: "0.75rem", objectFit: "cover", objectPosition: 'center', width: "100%", height: "100%" }} />
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"}  >
                                            ‌<Box display={"flex"} justifyContent={"space-between"} mb={"0.5rem"}>
                                                <Typography sx={{ color: "gray" }}>{name} می گوید </Typography>
                                                <Box display={"flex"} alignItems={"center"} gap={0.5}>
                                                    <CalendarTodayIcon sx={{
                                                        fontSize: "1.2rem", "& path": {
                                                            color: "gray"
                                                        }
                                                    }} />
                                                    <Typography sx={{ fontSize: "0.80rem", color: "gray" }}> {commentDate} پیش  </Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{ color: "gray", fontSize: '0.85rem', lineHeight: 1.7 }}>
                                                {
                                                    commentBody
                                                }
                                            </Typography>
                                            <Box display={"flex"} justifyContent={"flex-end"}>
                                                <Button onClick={() => setIsOpenFormReply(!isOpneFormReply)}>
                                                    <ReplyIcon sx={{
                                                        fontSize: "1.3rem",
                                                        "& path": {
                                                            color: '#444'
                                                        }
                                                    }} />
                                                    <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>پاسخ</Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {
                                        isOpneFormReply && (


                                            <Box >
                                                <Box sx={{ marginY: "1rem", borderBottom: "1px  solid  #444", pb: "1rem" }}>
                                                    <TitleSection isSubTitle={false} mainTitle={`پاسخ به ${name}`} />
                                                </Box>
                                                <Box display={"flex"} justifyContent={"flex-end"} my={"1rem"}>
                                                    ‌<Button sx={{ color: "var(--primary-color)" }} onClick={() => setIsOpenFormReply(false
                                                    )}>لفو پاسخ</Button>
                                                </Box>
                                                <FormComment />

                                            </Box>

                                        )
                                    }
                                </Box>
                            )
                        })
                    )
                }
            </Box>
        </>
    )
}

export default CommentBody