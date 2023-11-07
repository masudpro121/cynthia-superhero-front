import React, { useContext } from "react";
import HomeImage from "./../../assets/images/home-image.png";
import { useNavigate } from "react-router-dom";
import LayOut from "../../layout";
import { MyContext } from "../../App";
const Home = () => {
  const { setStep, setProgress, setProgressImage} = useContext(MyContext)
  const navigate = useNavigate();
  return (
    <LayOut>
      <div className="home-container">
        <div className="home-sec-1">
          <h1>Amazing Avatar Maker</h1>
          <p>Create your own hero-Image AI Avatar with SOSAFE</p>
          <button onClick={() => {
            setStep(0)
            setProgress(0)
            setProgressImage("")
            navigate("/generate-image")
          }}>
            Upload Image to Make Avatar
          </button>
        </div>
        <div className="home-sec-2">
          <img alt=" " src={HomeImage} />
        </div>
      </div>
    </LayOut>
  );
};
export default Home;
