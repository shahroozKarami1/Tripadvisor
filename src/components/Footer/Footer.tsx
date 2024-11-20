import styled from "@emotion/styled";
import {
  Autocomplete,
  Box,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
function Footer() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  const CusAutoComplete = styled(Autocomplete)({
    backgroundColor: "#fff",
    borderRadius: "1rem",
    "& .MuiInputBase-root"  : {
      padding :  0 , 
   width : "100%" ,  
      border : 0
    } ,  
    "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiPaper-root": {
    border: "none",
    boxShadow: "none", // در صورت نیاز به حذف سایه
  },
  });
  return (

      <Grid container spacing={2}>
        <Grid size={{ md: 8 }}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"end"}  >
            <img src="/public/images/singleLogo.svg" alt="" width={"50px"} />
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{ color: `var(--gray-color)`, fontSize: "0.80rem" }}
              >
                © 2024 Tripadvisor LLC کلیه حقوق محفوظ است.
              </Typography>
              <List
                sx={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  fontSize: "0.80rem",
                  fontWeight: "bold",
                }}
              >
                <ListItem>
                  <Link to={"/"}>شرایط استفاده</Link>
                </ListItem>
                <ListItem>
                  <Link to={"/"}>بیانیه حریم خصوصی و کوکی ها</Link>
                </ListItem>
                <ListItem>
                  <Link to={"/"}>رضایت کوکی</Link>
                </ListItem>
                <ListItem>
                  <Link to={"/"}>نقشه سایت</Link>
                </ListItem>
                <ListItem>
                  <Link to={"/"}>نحوه کار سایت</Link>
                </ListItem>
                <ListItem>
                  <Link to={"/"}>با ما تماس بگیرید</Link>
                </ListItem>
              </List>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  lineHeight: "2",
                  margin: "0  0.5rem",
                }}
              >
                این نسخه از وب سایت ما است که مخاطبان انگلیسی زبان در ایالات
                متحده است. اگر ساکن کشور یا منطقه دیگری هستید، لطفاً نسخه مناسب
                Tripadvisor را برای کشور یا منطقه خود در منوی کشویی انتخاب کنید.
                بیشتر
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 4 }} alignContent={"center"}  >
          <Box display={"flex"} flexDirection={"column"}>
            {/* <Box display={"flex"} alignItems={"center"} gap={2} width={"100%"}>
              <CusAutoComplete
                disablePortal
                fullWidth
                options={top100Films}
                value={"United States"}
                renderInput={(params) => <TextField {...params} />}
              />
              <CusAutoComplete
                disablePortal
                fullWidth
                options={top100Films}
                value={"USD$"}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box> */}
            <Box  justifyContent={"center"} display={"flex"} gap={3} sx={{ marginTop: "1rem" }}>
              <PinterestIcon />
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <XIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}

export default Footer;
