import { Button, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
interface IntroBtnProps {
  text: string;
  Type: "plus" | "date";
  setState: string;
}

const IntroBtn: FC<IntroBtnProps> = ({ Type, setState, text }) => {
  return (
    <>
      {Type === "plus" ? (
        <ListItem
          sx={{
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button sx={{ padding: 0 }}>
            <AddIcon
              sx={{
                fontSize: "1.1rem",
                "& path": {
                  color: "#444",
                },
              }}
            />
            <Typography sx={{ color: "#444", fontSize: "0.85rem" }}>
              {text}
            </Typography>
          </Button>
        </ListItem>
      ) : (
        <ListItem
          sx={{
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <InsertInvitationIcon
            sx={{
              fontSize: "1.1rem",
              "& path": {
                color: "#444",
              },
            }}
          />
          <Typography sx={{ color: "#444", fontSize: "0.85rem" }}>
            {text}
          </Typography>
        </ListItem>
      )}
    </>
  );
};

export default IntroBtn;
