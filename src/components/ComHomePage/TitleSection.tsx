import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { ITitleSectionProps } from "../../types/intefaces";
import { CusSectionTitle } from "../../elements/CusComponets";

const TitleSection: FC<ITitleSectionProps> = ({
  isSubTitle,
  mainTitle,
  subTitle,
  isSeeAll,
}) => {
  return (
    <CusSectionTitle>
      <Box  >
        <Typography
          sx={{
            color: `var(--black-color)`,
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          {mainTitle}
        </Typography>
        {isSubTitle && (
          <Typography sx={{ color: "#444" ,  fontSize : "0.90rem"  , paddingTop : "0.5rem" }}>
            {subTitle}
          </Typography>
        )}
      </Box>
      {isSeeAll && (
        <Button
          href="/"
          sx={{
            borderRadius: "2rem",
            border: "1px  solid  #000",
            fontSize: "0.80rem",
            color  :  "#000" ,  
            fontWeight : "bold" ,  
            padding : "0.5rem  1rem" , 
           ":hover" : {
            backgroundColor : "var(--dark-color)" ,  
            color  :  "#fff"
           }
          }}
        >
          دیدن همه
        </Button>
      )}
    </CusSectionTitle>
  );
};

export default TitleSection;
