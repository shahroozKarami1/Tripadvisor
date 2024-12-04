import { Box } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const CardSlider: FC<{ cover: string; link: string }> = ({ cover, link }) => {
  return (
    <Link to={link}>
      <Box
        sx={{
          position: "relative",
          width: "100%", // یا اندازه ثابت
          height: "500px", // ارتفاع دلخواه
          overflow: "hidden",
        }}
      >
        <img
          src={cover}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // این خط تصویر را برش می‌دهد
            objectPosition: "center", // برش در وسط انجام می‌شود
            borderTopRightRadius :"1rem" , 
            borderTopLeftRadius :"1rem"
          }}
        />
      </Box>
    </Link>
  );
};

export default CardSlider;
