import { Box, styled, Typography } from "@mui/material";
import { FC } from "react";
import { IAutoCompleteItemProps } from "../../types/intefaces";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
const CusAutoCompleteItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin : '0.75rem  0'  ,  
  cursor : "pointer"  ,   
  transition : "all  0.25s  ease" , 
  "&:hover" : {
      backgroundColor : "#ccc"
     
  }
});
const CoverNearbyIcon = styled(Box)({
  padding: "1rem 1.4rem",
  backgroundColor : "#ccc" ,  
  borderRadius  : "0.5rem"
});

const AutoCompleteItem: FC<IAutoCompleteItemProps> = ({
  country,
  cover,
  name,
  IsNearby,
}) => {
  return (
    <CusAutoCompleteItem display={"flex"} gap={1} alignItems={"center"}>
      <Box>
        {IsNearby ? (
          <CoverNearbyIcon>
            <NearMeOutlinedIcon />
          </CoverNearbyIcon>
        ) : (
          <Box sx={{ height: "70px" }}>
            <img
              src={cover}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                borderRadius: "0.5rem",
                height: "100%",
              }}
            />
          </Box>
        )}
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
          {country}
        </Typography>
      </Box>
    </CusAutoCompleteItem>
  );
};

export default AutoCompleteItem;
