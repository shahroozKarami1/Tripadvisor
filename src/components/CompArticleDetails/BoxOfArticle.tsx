import { Box, Typography } from "@mui/material";
import { FC } from "react";
import BodyText from "./BodyText";
import { IBoxOfArticleProps } from "../../types/intefaces";

const BoxOfArticle: FC<IBoxOfArticleProps> = ({
  AverageTemp,
  TextArticle,
  coverArticle,
  title,
  topic,
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}  margin={"1rem  0"}>
      <Typography  sx={{fontWeight : "bold" ,  fontSize :"2rem"}}>{title}</Typography>
      <Typography  sx={{fontWeight : "bold"}}>برای {topic}</Typography>
      <Typography sx={{fontStyle : "italic" ,  fontSize : "1.1rem"}}>
        میانگین دما : {AverageTemp.min}پایین , {AverageTemp.max} بالا
      </Typography>
      <img src={coverArticle} alt=""  className="mt-7" />
      {TextArticle.map(({ text }) => {
        return <BodyText textArticle={text} />;
      })}
    </Box>
  );
};

export default BoxOfArticle;
