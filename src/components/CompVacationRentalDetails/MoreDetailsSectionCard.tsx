import { FC } from "react";
import { IMoreDetailsSectionCardProps } from "../../types/intefaces";
import { Box, List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DoneIcon from "@mui/icons-material/Done";
const MoreDetailsSectionCard: FC<IMoreDetailsSectionCardProps> = ({
  AboutProperty,
  allowed,
  items,
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} sx={{ paddingY: "0.5rem" }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        sx={{ paddingY: "1rem ", borderBottom: "1px  solid  #ccc" }}
      >
        <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          درباره این ملک
        </Typography>
        <Typography sx={{ color: "#444", fontSize: "1rem" }}>
          {AboutProperty}
        </Typography>
      </Box>
      <Grid container alignItems={"center"}>
        <Grid size={{ md: 4  , xs : 12 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ marginTop: "1rem" }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              امکانات رفاهی
            </Typography>
            <List>
              <ListItem sx={{ padding: "0.5rem  0", color: "#444" }}>
                حیوانات خانگی : {allowed.pet ? "بله" : "خیر"}
              </ListItem>
              <ListItem sx={{ padding: "0.5rem  0", color: "#444" }}>
                کودک پسند و مطابق میل کودک : {allowed.kid ? "بله" : "خیر"}
              </ListItem>
              <ListItem sx={{ padding: "0.5rem  0", color: "#444" }}>
                کشیدن سیگار مجاز: {allowed.smoking ? "بله" : "خیر"}
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid size={{ md: 8  , xs : 12 }}>
          <Box >
            <List sx={{ display: "grid", gridTemplateColumns: "1fr  1fr" }}>
              {items.map((item) => {
                return (
                  <ListItem
                    alignItems="center"
                    sx={{ gap: 1, padding: "0.25rem" }}
                  >
                    <DoneIcon
                      sx={{ "& path": { color: "var(--primary-color)" } }}
                    />
                    <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>
                      {item}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoreDetailsSectionCard;
