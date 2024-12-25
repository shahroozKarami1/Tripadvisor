import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { ISearchTitleProps } from "../../types/intefaces";


const SearchTitle: FC<ISearchTitleProps> = ({ isAddPlaceBtn, text  ,  isSeeAllBtn }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ paddingTop: "2rem" }}
    >
      <Typography sx={{ fontSize: "1.7rem", fontWeight: "bold" }}>
        مطابقت با {text}
      </Typography>
      {isAddPlaceBtn && (
        <Button
          href="/CreateListing"
          sx={{
            color: "#000",
            fontSize: "1rem",
            borderBottom: "1px solid #000",
            padding: 0,
            borderRadius: 0,
          }}
        >
          اضافه کردن مکان
        </Button>
      )}
      {
     isSeeAllBtn  && (
        <Button
        href="/"
        sx={{
          color: "#000",
          fontSize: "1rem",
          borderBottom: "1px solid #000",
          padding: 0,
          borderRadius: 0,
        }}
      >
        دیدن همه
      </Button>
     )
      }
    </Box>
  );
};

export default SearchTitle;
