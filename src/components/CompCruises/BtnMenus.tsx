import { Children, FC, useState } from "react";
import { IBtnMenusProps } from "../../types/intefaces";
import { Box, Button, Menu, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "@emotion/styled";
const BtnMenus: FC<IBtnMenusProps> = ({
  icon,
  textOnBtn,
  isWhereToInp,
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const CusBtnMenu = styled(Button)({
    border: "1px  solid  #ccc",
    width: "200px",
    height: "50px",
    display: "flex",
    justifyContent: "flex-start",
    gap: 4,
  });
  return (
    <>
      <CusBtnMenu
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography>{icon}</Typography>
        {!isWhereToInp ? (
          <Typography> {textOnBtn}</Typography>
        ) : (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Typography sx={{ fontSize: "0.80rem" }}> {textOnBtn}</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
              جمهوری دومنیکن
            </Typography>
          </Box>
        )}
        <KeyboardArrowDownIcon />
      </CusBtnMenu>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default BtnMenus;
