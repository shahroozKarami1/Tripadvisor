import * as React from "react";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
type TAccordionMenuProps = {
  title: string;
  textBody: string;
  id: number;
}[];

// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&::before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor: 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
//     {
//       transform: 'rotate(90deg)',
//     },
//   [`& .${accordionSummaryClasses.content}`]: {
//     marginLeft: theme.spacing(1),
//   },
//   ...theme.applyStyles('dark', {
//     backgroundColor: 'rgba(255, 255, 255, .05)',
//   }),
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

const AccordionMenu: React.FC<{ dataCoordion: TAccordionMenuProps }> = ({
  dataCoordion,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {dataCoordion.map(({ textBody, title, id }) => {
        return (
          <Accordion
            sx={{ border: 0, boxShadow: 0 }}
            expanded={expanded === `panel${id}`}
            onChange={handleChange(`panel${id}`)}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon />}
              id={`panel${id}d-header`}
              sx={{ display: "flex" }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  sx={{fontSize  : "0.90rem"}}>{textBody}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default AccordionMenu;
