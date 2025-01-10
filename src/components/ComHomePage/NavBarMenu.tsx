import { Button, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { INavbarMenuProps } from "../../types/intefaces";
import { Link, useLocation } from "react-router-dom";
import { useMedia } from "../../context/MediaQueryContext";

const NavbarMenu: FC<INavbarMenuProps> = ({
  NavBarMenuArr,
  fontSize,
  id,
  HandlerBtn,
  isFlight,
  StateID ,  

}) => {
  let isXs = useMedia();
  let  activeLink  =  useLocation().pathname
  return (
    <>
      {NavBarMenuArr.map(({ icon, title, link, placeholder, textTitle }) => {
        return (
          <ListItem key={id} sx={{padding : " 0 0.75rem"}}>
            <Link to={link ? link : "/"}>
              <Button
                onClick={() => {
                  
                  if (HandlerBtn) {
                    HandlerBtn(
                      textTitle || "",
                      id || 0,
                      placeholder || "",
                      isFlight
                    );
                  }
                }}
                sx={{
                  gap: 1,
                  padding: 0,
                  margin :0 ,  
                  "&:hover": {
                    borderBottom: "2px  solid  #000",
                  },
                }}
                style={{
                  paddingBottom: "0.5rem",
                  borderBottom: id ===  StateID || link ===   activeLink
                    ? "3px  solid var(--dark-color)"
                    : "",
                }}
              >
                {icon}
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    fontWeight: isXs ? "light" : "bold",
                    color: isXs ? "white" : "var(--dark-color)",
                    fontSize: { fontSize },
                  }}
                >
                  {title}
                </Typography>
              </Button>
            </Link>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavbarMenu;
