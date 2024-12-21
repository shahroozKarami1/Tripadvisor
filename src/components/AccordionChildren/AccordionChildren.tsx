import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionChildren: FC<{
  id: number;
  titleAccordion: string;
  children: React.ReactNode;
}> = ({ children, id, titleAccordion }) => {
//   const [expanded, setExpanded] = useState<string | false>(false);

//   const handleChange =
//     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//       setExpanded(isExpanded ? panel : false);
//     };
  return (
    <Accordion
    defaultExpanded
    sx={ {
     boxShadow :  0  ,  
     "& .MuiAccordionDetails-root" : {
        padding :  0  ,  
     }
    }}
    //   expanded={expanded === `panel${id}`}
    //   onChange={handleChange(`panel${id}`)}
    >
      <AccordionSummary   
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}bh-content`}
        id={`panel${id}bh-header`}
      >
        <Typography  sx={{fontWeight :  "bold"}}>{titleAccordion}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionChildren;
