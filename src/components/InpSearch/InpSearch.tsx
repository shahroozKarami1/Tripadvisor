import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { FC } from "react";
import { CusSearchBtn, CusSearchInp } from "../../elements/CusComponets";

interface IInpSearchProps {
  isBtnSearch: boolean;
  textPlaceHolder: string;
}

const InpSearch: FC<IInpSearchProps> = ({ isBtnSearch, textPlaceHolder }) => {
  return (
    <CusSearchInp
      placeholder={textPlaceHolder}
      endAdornment={
        <InputAdornment position="end">
          <SearchOutlined />
        </InputAdornment>
      }
      startAdornment={
        isBtnSearch ? <CusSearchBtn> جست و جو </CusSearchBtn> : null
      }
    />
  );
};

export default InpSearch;
