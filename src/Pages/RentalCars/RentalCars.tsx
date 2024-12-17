// import { Box, Tab, Tabs } from "@mui/material";
// import React, { useState } from "react";
// import TabItemComp from "../../components/CompRentalCardItem/TabItemComp";
// import styled from "@emotion/styled";
// import BrowseLocation from "../../components/CompRentalCardItem/BrowseLocation";
// import FindRentalCard from "../../components/CompRentalCardItem/FindRentalCard";

// function RentalCars() {
//   const CusTab = styled(Tab)({
//     fontWeight: "bold ",
//     color: `var(--black-color)`,
//     "&.MuiButtonBase-root.Mui-selected": {
//       color: `var(--primary-color)`,
//     },
//   });

//   function a11yProps(index: number) {
//     return {
//       id: `simple-tab-${index}`,
//       "aria-controls": `simple-tabpanel-${index}`,
//     };
//   }


//   return (
//     <>
//       {/* <Box sx={{ width: "100%" }}>
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="basic tabs example"
//           >
//             <CusTab label="ماشین های کرایه ای پیدا کنید" {...a11yProps(0)} />
//             <CusTab label="مکان ها را مرور کنید" {...a11yProps(1)} />
//           </Tabs>
//         </Box>
//         <TabItemComp value={value} index={0}>
//           <FindRentalCard />
//         </TabItemComp>
//         <TabItemComp value={value} index={1}>
//           <BrowseLocation />
//         </TabItemComp>
//       </Box> */}
//     </>
//   );
// }

// export default RentalCars;
