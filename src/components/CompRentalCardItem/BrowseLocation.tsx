import { Box } from "@mui/material";
import React from "react";
import InpSearch from "../InpSearch/InpSearch";
import DarkBtn from "../DarkBtn/DarkBtn";

function BrowseLocation() {
  return (
    <Box>
      <InpSearch isBtnSearch={false} textPlaceHolder="شهر یا فرودگاه" />
      <DarkBtn>جست و جو</DarkBtn>
    </Box>
  );
}

export default BrowseLocation;
