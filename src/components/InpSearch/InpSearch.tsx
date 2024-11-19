import { SearchOutlined } from "@mui/icons-material";
import { Button, Input, InputAdornment } from "@mui/material";
import { FC } from "react";
import { CusSearchBtn, CusSearchInp } from "../../elements/CusComponets";

interface IInpSearchProps {
  isBtnSearch :  boolean
}

const InpSearch: FC<IInpSearchProps> = ({isBtnSearch}) => {
  return (
    <CusSearchInp
      placeholder="جست و جو کنید ..."
      endAdornment={
        <InputAdornment position="end">
          <SearchOutlined />
        </InputAdornment>
      }
      startAdornment={  isBtnSearch ? <CusSearchBtn> جست و جو </CusSearchBtn> :  null}
    />
  );
};

export default InpSearch;
