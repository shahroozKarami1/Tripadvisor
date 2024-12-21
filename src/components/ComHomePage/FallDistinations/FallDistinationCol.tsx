import Grid from "@mui/material/Grid2";
import { FC } from "react";
import {  List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FallDistinationCol: FC<{ myData: { link: string; title: string }[] }> = ({
  myData,
}) => {
  function chunkingArray(
    Array: { link: string; title: string }[],
    chunkNumber: number
  ) {
    let chunk = [];
    for (let i = 0; i < Array.length; i += chunkNumber) {
      chunk.push(Array.slice(i, i + chunkNumber));
    }
    return chunk;
  }
  let result = chunkingArray(myData, 5);
  return (
    <>
      {result.map((item ,  index) => {
        return (
          <Grid size={{ md: 3 }}  key={index}>
            <List>
              {item.map(({ link, title  } ,  index) => {
                return (
                  <ListItem key={index}>
                    <Link to={link}>
                      <Typography  sx={{fontSize  : "0.90rem"}}>{title}</Typography>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        );
      })}
    </>
  );
};

export default FallDistinationCol;
