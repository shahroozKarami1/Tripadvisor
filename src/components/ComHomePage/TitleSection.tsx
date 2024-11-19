import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ITitleSectionProps } from "../../types/intefaces";
import { CusSectionTitle } from "../../elements/CusComponets";

const TitleSection: FC<ITitleSectionProps> = ({
  isSubTitle,
  mainTitle,
  subTitle,
}) => {

  return (
    <CusSectionTitle >
      <Typography sx={{color : `var(--black-color)` ,  fontSize : "1.3rem" ,  fontWeight :"bold"}}>{mainTitle}</Typography>
      {isSubTitle && <Typography  sx={{color : `var(--gray-color)`}}> {subTitle}</Typography>}
    </CusSectionTitle>
  );
};

export default TitleSection;
