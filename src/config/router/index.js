import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, UploadGuide,Gallery, GenerateImage} from "../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-image" element={<GenerateImage />} />
        <Route path="/upload-guide" element={<UploadGuide />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
