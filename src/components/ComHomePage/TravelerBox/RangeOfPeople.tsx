import { FC } from "react";
import { IRangeOfPeopleProps } from "../../../types/intefaces";
import { ListItem, Typography } from "@mui/material";

const RangeOfPeople: FC<IRangeOfPeopleProps> = ({ age, range }) => {
  return (
    <ListItem sx={{ display: "flex", flexDirection: "column",    alignItems :"flex-start",  gap :1  }}>
      <Typography sx={{ fontWeight: "bold"   ,  whiteSpace :"nowrap"}}>{range}</Typography>
      <Typography sx={{ fontSize: "0.80rem", whiteSpace: "nowrap" }}>
        سن {age}
      </Typography>
    </ListItem>
  );
};

export default RangeOfPeople;
