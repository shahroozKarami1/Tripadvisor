import { FC } from "react";
import { IListOfForumProps } from "../../types/intefaces";
import { List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ListOfForum: FC<IListOfForumProps> = ({ DataArrListFormus, title }) => {
  return (
    <List>
      <Typography  sx={{fontWeight : "bold"  ,  fontSize : "1.1rem" ,  marginBottom  : "1rem"}}>{title}</Typography>
      {DataArrListFormus.map(({ link, text }) => {
        return (
          <>
            <ListItem>
              <Link to={link}>
                <Typography  >{text}</Typography>
              </Link>
            </ListItem>
          </>
        );
      })}
    </List>
  );
};

export default ListOfForum;
