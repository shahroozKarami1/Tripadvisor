import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ITitleSectionProps } from "../../types/intefaces";
import { CusSectionTitle } from "../../elements/CusComponets";
import { Link } from "react-router-dom";

const TitleSection: FC<ITitleSectionProps> = ({
  isSubTitle,
  mainTitle,
  subTitle,
  isSeeAll,
  
}) => {
  return (
    <CusSectionTitle>
      <Box>
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
          <Typography sx={{ color: `var(--gray-color)` }}>
            {subTitle}
          </Typography>
        )}
      </Box>
      {isSeeAll && (
        <Box>
          <Link to={"/"}>
            <Typography>دیدن همه </Typography>
          </Link>
        </Box>
      )}
    </CusSectionTitle>
  );
};

export default TitleSection;
