// import { Box, Typography } from "@mui/material";
// import React, { FC } from "react";
// import { CusAddBtn, CusRemoveBtn } from "../../elements/CusComponets";

// interface IAddTravelerBoxProps {
// title  : string  ;  
// }

// const AddTravelerBox: FC<IAddTravelerBoxProps> = ({title}) => {
//   return (
//     <Box display={""}>
//       <Box
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//       >
//         <Box display={"flex"} flexDirection={"column"} gap={1}>
//           <Typography sx={{ fontWeight: "bold" }}>
//              {title}
//             <span className="font-light  text-xs  text-gray-800">
//               سن 14 -55
//             </span>
//           </Typography>
//           <Typography sx={{ fontSize: "0.80rem" }}>2 میلیون تومان</Typography>
//         </Box>
//         <Box display={"flex"} gap={1} alignItems={"center"}>
//           <CusAddBtn onClick={addTravler}>+</CusAddBtn>
//           <Typography sx={{ fontWeight: "bold" }}>{travelers}</Typography>
//           <CusRemoveBtn onClick={ramoveTraveler}>-</CusRemoveBtn>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AddTravelerBox;
