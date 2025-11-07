import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { MapPage } from "../pages/map";
import { Upload } from "../pages/upload";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signUp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* Catch-all 404 route */}
      <Route path="*" element={<div>Page 404!</div>} />
    </Routes>
  );
};
