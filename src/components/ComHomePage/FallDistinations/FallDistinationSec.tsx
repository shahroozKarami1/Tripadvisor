import { Box, styled, Tab, Tabs } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FallDistinationCol from "./FallDistinationCol";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CusTab = styled(Tab)({
  color: "#444",
});
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FallDistinationSec = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .css-1q90d18-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              color: "var(--primary-color)",
              fontWeight: "bold",
            },
            "& .css-1qltlow-MuiTabs-indicator": {
              backgroundColor: "var(--primary-color)",
            },
          }}
        >
          <CusTab label="مقاصد پاییزی" {...a11yProps(0)} />
          <CusTab label="درباره سندباد تریپ" {...a11yProps(1)} />
          <CusTab label="انتخاب گردشگران منتخب" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel index={0} value={value}>
        <Grid container>
          <FallDistinationCol
            myData={[
              { link: "/", title: "ترکیه" },
              { link: "/", title: "آنتالیا" },
              { link: "/", title: "سنگاپور" },
              { link: "/", title: "ازمیر" },
              { link: "/", title: "شیراز" },
              { link: "/", title: "اهواز" },
              { link: "/", title: "پکن" },
              { link: "/", title: "مسکو" },
              { link: "/", title: "اسکاتلند" },
              { link: "/", title: "آدنا" },
              { link: "/", title: "دوبی" },
              { link: "/", title: "ریاض" },
              { link: "/", title: "اسکاتلند" },
              { link: "/", title: "آدنا" },
              { link: "/", title: "دوبی" },
              { link: "/", title: "ریاض" },
            ]}
          />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel index={1} value={value}>
        <Grid container>
          <FallDistinationCol
            myData={[
              { link: "/", title: "اطلاعات تماس" },
              { link: "/", title: "آدرس ما" },
              { link: "/", title: "تیم بزرگ سندباد تریپ" },
              { link: "/", title: "درخواست همکاری" },
            ]}
          />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel index={2} value={value}>
        <Grid container>
          <FallDistinationCol
            myData={[
              { link: "/", title: "ترکیه" },
              { link: "/", title: "آنتالیا" },
              { link: "/", title: "سنگاپور" },
              { link: "/", title: "ازمیر" },
              { link: "/", title: "شیراز" },
              { link: "/", title: "اهواز" },
              { link: "/", title: "پکن" },
              { link: "/", title: "مسکو" },
              { link: "/", title: "اسکاتلند" },
              { link: "/", title: "آدنا" },
              { link: "/", title: "دوبی" },
              { link: "/", title: "ریاض" },
              { link: "/", title: "اسکاتلند" },
              { link: "/", title: "آدنا" },
              { link: "/", title: "دوبی" },
              { link: "/", title: "ریاض" },
            ]}
          />
        </Grid>
      </CustomTabPanel>
    </Box>
  );
};

export default FallDistinationSec;
