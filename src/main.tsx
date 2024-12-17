import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MediaProvider } from "./context/MediaQueryContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MediaProvider>
      <App />
    </MediaProvider>
  </BrowserRouter>
);
