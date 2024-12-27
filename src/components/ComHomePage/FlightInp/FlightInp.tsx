import { Box, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import RoundTripInp from "../../CompFlightPage/RoundTripInp";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
const FlightInp = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const CusTabsInp = styled(Tab)({
    color: "#fff",
    fontSize: "1.2rem",
    // fontWeight: "bold",
  });

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .css-l4oarj-MuiButtonBase-root-MuiTab-root.Mui-selected ": {
                color: "#fff",
                fontWeight : "bold"
              },
              "& .css-1qltlow-MuiTabs-indicator": {
                backgroundColor: "#fff",
              },
            }}
          >
            <CusTabsInp label="رفت و برگشت" {...a11yProps(0)} />
            <CusTabsInp label="یک طرفه" {...a11yProps(1)} />
            <CusTabsInp label="چند شهر" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
         <RoundTripInp/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default FlightInp;
