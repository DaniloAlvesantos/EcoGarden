import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { MapPage } from "../pages/map";
import { Upload } from "../pages/upload";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/upload" element={<Upload />} />
      {/* Catch-all 404 route */}
      <Route path="*" element={<div>Page 404!</div>} />
    </Routes>
  );
};
