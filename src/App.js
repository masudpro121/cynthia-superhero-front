import React, { createContext, useState } from "react";
import RouterNavigation from "./config/router";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/upload-guide.css";
import "./styles/chose-your-image.css";
import "./styles/gallery.css";
import "./styles/layout.css";
export const MyContext = createContext()
const App = () => {
  const [uploadedImage, setUploadedImage] = useState("")
  
  const value = {uploadedImage, setUploadedImage}
  return (
      <MyContext.Provider value={value}>
        <RouterNavigation />
      </MyContext.Provider>
  );
};
export default App;
