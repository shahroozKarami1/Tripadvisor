import { createContext, ReactNode, useContext } from "react";
import { useMediaQuery } from "@mui/material";

type MediaContextType = boolean | null;

const MediaContext = createContext<MediaContextType>(null);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const isXs = useMediaQuery("(max-width: 768px)");

  return <MediaContext.Provider value={isXs}>{children}</MediaContext.Provider>;
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (context === null) {
    throw new Error("useMedia باید در داخل MediaProvider استفاده شود");
  }
  return context;
};

export default MediaContext;
