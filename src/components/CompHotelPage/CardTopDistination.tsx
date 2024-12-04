import { FC, useState } from "react";
import { ICardTopDistinationProps } from "../../types/intefaces";
import { Box, Button, Typography } from "@mui/material";

const CardTopDistination: FC<ICardTopDistinationProps> = ({
  diec,
  img,
  title,
}) => {
  let [isExpended, setIsExpended] = useState<boolean>(false);

  const toggleReadMore = () => {
    setIsExpended(!isExpended);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <img src={img} className="rounded-md" alt="" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        sx={{ marginTop: "1rem" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: isExpended ? "none" : 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {diec}
        </Typography>
        {diec && diec.split(" ").length > 50 && (
          <Box>
            <Button
              sx={{
                color: "#000",
                textAlign: "right",
                fontWeight: "bold",
                borderBottom: "3px  solid #000",
              }}
              variant="text"
              onClick={toggleReadMore}
            >
              {isExpended ? "نمایش کمتر" : "نمایش بیشتر"}{" "}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CardTopDistination;
