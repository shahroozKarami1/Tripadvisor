import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { IOperatorCardProps } from "../../types/intefaces";
import styled from "@emotion/styled";
import { CusCircleIcon } from "../../elements/CusComponets";

const OperatorCard: FC<IOperatorCardProps> = ({
  countContributions,
  mainText,
  name,
  profile,
  date ,
  title,
}) => {
  let [IsOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const CusOperatorDetails = styled(Box)({
    direction: "rtl",
    borderRadius: "1rem",
    margin: "0.25rem",
    border: "1px  solid #ccc",
    padding: "1rem",
  });

  const ReadMoreBtn = styled(Button)({
    fontSize: "0.80rem",
    color: "#000",
    fontWeight: "bold",
    borderBottom: "3px solid #000",
    padding: 0,
  });

  return (
    <>
      <CusOperatorDetails>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <img
            src={profile}
            alt=""
            style={{ width: "50px", borderRadius: "50%" }}
          />
          <Box display={"flex"} flexDirection={"column"}>
            <Typography sx={{ fontSize: "0.90rem" }}>{name}</Typography>
            <Typography sx={{ fontSize: "0.70rem" }}>
              {countContributions}مشارکت
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} margin={"0.5rem 0"}>
          <Box display={"flex"}>
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
          </Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "0.80rem",
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {mainText}
          </Typography>
          <Box >
            <ReadMoreBtn onClick={() => setIsOpenDialog(true)}>
              مشاهده بیشتر
            </ReadMoreBtn>
            <Typography  sx={{fontSize : "0.70rem"  ,  color : "#444" ,  marginTop : "1rem"}}> نوشته شده در {date}</Typography>
          </Box>
        </Box>
      </CusOperatorDetails>
      <Dialog open={IsOpenDialog} onClose={() => setIsOpenDialog(false)}>
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OperatorCard;
