import { Box } from "@mui/material";
import { FC } from "react";
import { IMainBannerProps } from "../../types/intefaces";
import styled from "@emotion/styled";

const MainBanner: FC<IMainBannerProps> = ({ bannerUrl, children }) => {
  const CusMainBanner = styled(Box)({
    background: `url(${bannerUrl})`,
    height: "80vh",
    // width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  });

  return <CusMainBanner>{children}</CusMainBanner>;
};

export default MainBanner;
