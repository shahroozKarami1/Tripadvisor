import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IMainBlogCardProps } from "../../types/intefaces";
import { Link } from "react-router-dom";

const MainBlogCard: FC<IMainBlogCardProps> = ({
  Address,
  cover,
  paragrapth,
  title,
}) => {
  return (
    <Box  sx={{my : "2rem"}}>
      <Box sx={{ width: "100%", height : '400px'}}>
        <img src={cover} alt="" style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius :"1rem" ,  
          width: '100%',
          height: "100%"
        }} />
      </Box>
      <Box sx={{ marginY: "0.5rem" }}>
        <Link to={Address.link}>
          <Typography
            sx={{
              color: "var(--primary-color)",
              fontWeight: "bold",
              fontSize: "1.2rem",

              marginTop : "1rem"
            }}
          >
            {Address.text}
          </Typography>
        </Link>
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {title}
      </Typography>
      <Box>
        {paragrapth.map((text) => {
          return <Typography sx={{ marginTop: "1rem" ,  color : "#444" }}>{text}</Typography>;
        })}
      </Box>
    </Box>
  );
};

export default MainBlogCard;
