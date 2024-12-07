import { Button, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function SaveBtn() {
  return (
    <Button
    sx={{
      bgcolor: "#fff",
      border: "1px  solid #000",
      padding: "0.5rem  1rem",
      borderRadius: "2rem",
    }}
  >
    <FavoriteBorderOutlinedIcon />
    <Typography
      sx={{ fontWeight: "bold", fontSize: "0.90rem" }}
    >
      ذخیره
    </Typography>
  </Button>  )
}

export default SaveBtn