import { Box, Link, List, ListItem, styled, Typography } from "@mui/material";
import { FC } from "react";
import { useMedia } from "../../context/MediaQueryContext";

const LinkList: FC<{ text: string }> = ({ text }) => {
  return (
    <ListItem>
      <Link sx={{ color: "#000", cursor: "pointer" }}>{text}</Link>
    </ListItem>
  );
};
const LinkSide = () => {
  let isXs = useMedia();
  const CusRightSideBox = styled(Box)({
    bgcolor: "#fff",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    marginTop: "6rem",
    boxShadow: "var(--main-shadow)",
    top: isXs ? 80 : 200,
    position: "sticky",
    backgroundColor: "#fff",
    zIndex: 400,
  });
  let listItems = [
    {
      text: "همه جست و  جو ها",
    },
    {
      text: "رستوران ها",
    },
    {
      text: "مقصد ها",
    },
    {
      text: "هتل ها",
    },
    {
      text: "کارهایی برای انجام",
    },
    {
      text: "اجاره ها در تعطیلات",
    },
    {
      text: "شرکت های هواپیمایی",
    },
    {
      text: "انجمن ها",
    },
  ];
  return (
    <CusRightSideBox>
      <Typography sx={{ fontWeight: "bold", paddingY: "0.5rem" }}>
        فیلتر نتایج
      </Typography>
      <List
        sx={{
          display: isXs ? "flex" : "block",
          whiteSpace: "nowrap",
          overflowX: "auto",
        }}
      >
        {listItems.map(({ text }) => {
          return <LinkList text={text} />;
        })}
      </List>
    </CusRightSideBox>
  );
};

export default LinkSide;
