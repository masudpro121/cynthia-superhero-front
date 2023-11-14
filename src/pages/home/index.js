import React, { useContext } from "react";
import HomeImage from "./../../assets/images/home-image.png";
import { useNavigate } from "react-router-dom";
import LayOut from "../../layout";
import { MyContext } from "../../App";
import { SERVER } from "../../config/site";
const Home = () => {
  const { setProgress, setProgressImage, setUploadedImage, setStep} = useContext(MyContext)
  const navigate = useNavigate();

  const uploadHandler = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    const url = SERVER + "/upload-image"
    fetch(url, {
      method: 'POST',
      body : formData
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.img){
        setUploadedImage(res.img)
        setStep(0)
        navigate("/generate-image");
      }
    })
  };
  return (
    <LayOut>
      <div className="home-container">
        <div className="home-sec-1">
          <h1>Amazing Avatar Maker</h1>
          <p>Create your own hero-Image AI Avatar with SOSAFE</p>
          <label>
            Upload Image to Make Avatar
          <input
            type="file"
            accept="image/*"
            onChange={(e) => uploadHandler(e.target.files)}
          />
        </label>
        </div>
        <div className="home-sec-2">
          <img alt=" " src={HomeImage} />
        </div>
      </div>
    </LayOut>
  );
};
export default Home;
