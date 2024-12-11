import { Box, Button, Typography } from "@mui/material";
import { FC, useState } from "react";

const ReadMore: FC<{
  textBody: string;
  lineShow: number;
}> = ({ lineShow, textBody }) => {
  let [isExpended, setIsExpended] = useState<boolean>(false);
  const toggleReadMore = () => {
    setIsExpended(!isExpended);
  };
  return (
    <Box>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: isExpended ? "none" : lineShow,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontsize: "0.90rem",
          textAlign: "right",
        }}
      >
        {textBody}
      </Typography>
      {textBody.split(" ").length > 20 && (
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            sx={{
              color: "#000",
              fontWeight: "bold",
              borderBottom: "1px  solid #000",
              fontSize: "0.80rem",
            }}
            variant="text"
            onClick={toggleReadMore}
          >
            {isExpended ? "نمایش کمتر" : "نمایش بیشتر"}{" "}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReadMore;
