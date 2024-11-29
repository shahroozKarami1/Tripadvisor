import { Box, Input, InputAdornment, Typography } from "@mui/material";
import { FC } from "react";
import { IInpsForAddProps } from "../../types/intefaces";
import styled from "@emotion/styled";

const InpsForAdd: FC<IInpsForAddProps> = ({
  icon,
  isOptional,
  isSelectBox,
  label,
  isIcon,
  position,
  setIsOpenNewAddressBox,
}) => {
  const CusInp = styled(Input)({
    width: "100%",
    margin: "1rem  0",
    border: "2px  solid  #ccc",
    padding: "0.5rem",
    "&.MuiInputBase-root": {
      "&::before": {
        display: "none",
      },
    },
  });

  return (
    <Box>
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        sx={{ marginBottom: "0.25rem" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{label}</Typography>
        {isOptional && (
          <Typography sx={{ fontSize: "0.75rem" }}>(optional)</Typography>
        )}
      </Box>
      {!isSelectBox ? (
        isIcon ? (
          position === "start" ? (
            <CusInp
              onFocus= {  ()  =>  setIsOpenNewAddressBox ?.(true)}
              onBlur={()  =>  {
                if (setIsOpenNewAddressBox) {
                  setIsOpenNewAddressBox(false)
                }
              }}
              startAdornment={
                <InputAdornment position={position}>{icon}</InputAdornment>
              }
            />
          ) : (
            <CusInp
              endAdornment={
                <InputAdornment position={position}>{icon}</InputAdornment>
              }
            />
          )
        ) : (
          <CusInp />
        )
      ) : (
        <h1>helllo </h1>
      )}
    </Box>
  );
};

export default InpsForAdd;
