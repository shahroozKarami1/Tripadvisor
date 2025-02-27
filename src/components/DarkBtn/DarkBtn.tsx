import { Button } from "@mui/material";
import { FC } from "react";
import { IDarkBtnProps } from "../../types/intefaces";
import styled from "@emotion/styled";

const DarkBtn: FC<IDarkBtnProps> = ({ children, setState }) => {
  const CusDarkBtn = styled(Button)({
    backgroundColor: `var(--dark-color)`,
    color: "#fff",
    borderRadius: "1.2rem",
    whiteSpace: "nowrap",
    padding: "0.5rem  2rem  ",
    fontSize: "1rem",
    fontWeight: "bold",
  });

  return (
    <CusDarkBtn onClick={setState ? () => setState(true) : () => {}}>
      {children}
    </CusDarkBtn>
  );
};

export default DarkBtn;
