import { Box, Menu, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import { CusMenuBtn } from "../../elements/CusComponets";
import { ICusManuProps } from "../../types/intefaces";
import { Link } from "react-router-dom";

const TopBarMenu: FC<ICusManuProps> = ({ titleMenu, subMenuArray }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <CusMenuBtn
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {titleMenu}
      </CusMenuBtn>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {subMenuArray.map((items , index) => {
          return (
            <MenuItem  key ={index} onClick={handleClose}  sx={{fontSize : "0.80rem"  ,  fontWeight : 'bold'    }}>
              <Link to={items.link}>{items.text}</Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default TopBarMenu;
